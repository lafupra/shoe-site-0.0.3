import React,{useState} from 'react'
import "./Checkout.css"
import Order from "./Order/Order"
import Barcode from './Barcode/Barcode'
import { apiUrl } from '../../Data'
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux"
import axios from "axios"
import "./Razorpay.scss"

const CheckOut = () => {
  const [orderDetails,setOrderDetails] = useState({})
  const [loading,setLoading] = useState(false)
  const cart = useSelector(state => state.user.cart)
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

 
  //  razorpay checkouthandler

  const checkoutHandler = async () => {
  
    setLoading(true)
    const oid = await submitOrder()

    console.log(oid)


   const order = await axios.post(`${apiUrl}/checkout`,{amount:cart.total})

 


   const options = {
       "key": "rzp_test_OGZVnuLfuiNS98", // Enter the Key ID generated from the Dashboard
       "amount": order.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
       "currency": "INR",
       "name": user.name,
       "description": "Test Transaction",
       "image": "https://example.com/your_logo",
       "order_id": order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      //  "callback_url": `${apiUrl}/verification/${oid}`,
       "handler": async (response) => {

        if(response){
           
         

          alert(response.razorpay_payment_id);
            const auth = await axios.post(`${apiUrl}/verification/${oid}`,response)
            if(auth.status === 200){
              alert("auth succesfull")
              navigate(`/paymentsuccess/${auth.data.razorpay_payment_id}`)

            }else{
              alert("auth failed")
              navigate("/paymentfailure")
            }
         

        }else{
          alert("payment failed")
          navigate("/paymentfailure")
        }
           
           

           
       },
       "prefill": {
           "name": user.name,
           "email": user.email,
           "contact": "9000090000"
       },
       "notes": {
           "address": orderDetails.address
       },
       "theme": {
           "color": "#3399cc"
       }
   };

   if(oid !== undefined) {
     const razor = new window.Razorpay(options) 
     setLoading(false)
     razor.open()

    


   } else{
     alert("oid is undefined")
   }
}


const handleOrderDetails = (e) => {

  setOrderDetails((prev) => {
    return {...prev,[e.target.name]:e.target.value}
  })

}


// making order


  const submitOrder = async () => {

  

  try{
   const orderdata = {products:cart.products,userId:cart.userId,total:cart.total,...orderDetails}
    const ordersubmit = await axios.post(`${apiUrl}/order/add`,orderdata,{
      headers:{
        "token":user.token
       }
    })

  
   
    const orderid = ordersubmit.data._id


    return orderid
   
    
   


  

  }catch(err){
    alert("Some Rrror Occoured")
  }

  }


  return (
   <>
   <Order/>
   <Barcode/>
 
   <div className="checkout-section">
  <h2 className="checkout-title">Checkout</h2>
  <form className="checkout-form">
    
    <div className="form-group">
      <label className="form-label" >Address:</label>
      <input onChange={handleOrderDetails} className="form-input" type="text" name="address"  required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="city">City:</label>
      <input  onChange={handleOrderDetails} className="form-input" type="text" name="city"  required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="state">State:</label>
      <input   onChange={handleOrderDetails} className="form-input" type="text" name="state"  required/>
    </div>
    <div className="form-group">
      <label className="form-label" for="zip">Zip Code:</label>
      <input  onChange={handleOrderDetails} className="form-input" type="number" name="zipCode"  required/>
    </div>
  </form>
  
 

{/* razorpay */}

<div className="razorpay">
  <h1> Pay With The Razorpay</h1>
  {loading && <div className="spinner-container">
      <div className="loading-spinner">
      </div>
     
    </div> }
  <div className="paymentbtn"  onClick={checkoutHandler}>{loading ? "loading" : "Use Razor pay"}</div>
</div>

</div>
   </>
  )
}

export default CheckOut