import React,{useState} from 'react'
import "./Checkout.css"
import Order from "./Order/Order"
import Barcode from './Barcode/Barcode'
import { apiUrl } from '../../Data'

import {useSelector} from "react-redux"
import axios from "axios"
import "./Razorpay.scss"

const CheckOut = () => {
  const [orderDetails,setOrderDetails] = useState({})
  const cart = useSelector(state => state.user.cart)
  const user = useSelector(state => state.user.user)

 
  //  razorpay checkouthandler

  const checkoutHandler = async () => {

    const oid = await submitOrder()

    console.log(oid)


   const order = await axios.post(`${apiUrl}/checkout`,{amount:cart.total})

 console.log(order)


   const options = {
       "key": "rzp_test_OGZVnuLfuiNS98", // Enter the Key ID generated from the Dashboard
       "amount": order.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
       "currency": "INR",
       "name": user.name,
       "description": "Test Transaction",
       "image": "https://example.com/your_logo",
       "order_id": order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
       "callback_url": `${apiUrl}/verification/${oid}`,
       // "handler": function (response){
       //     alert(response.razorpay_payment_id);
       //     alert(response.razorpay_order_id);
       //     alert(response.razorpay_signature)
           

           
       // },
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
    <div className="form-group">
      <label className="form-label" for="zip">Upi Ref No:</label>
      <input  onChange={handleOrderDetails} className="form-input" type="text" name="upiRefNo" required/>
    </div>

    
  
        
  </form>
  
  <button onClick={submitOrder} className="checkout-button red">Place Order</button>

{/* razorpay */}

<div className="razorpay">
  <h1> Pay With The Razorpay</h1>
  <div className="paymentbtn"  onClick={checkoutHandler}>Use Razor pay</div>
</div>

</div>
   </>
  )
}

export default CheckOut