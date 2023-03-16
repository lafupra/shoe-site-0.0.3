import React,{useState} from 'react'
import "./Checkout.css"
import Order from "./Order/Order"
import Barcode from './Barcode/Barcode'
import { apiUrl } from '../../Data'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import axios from "axios"

const CheckOut = () => {
  const [orderDetails,setOrderDetails] = useState({})
  const navigate = useNavigate()
  const cart = useSelector(state => state.user.cart)
  const user = useSelector(state => state.user.user)

 
  


const handleOrderDetails = (e) => {

  setOrderDetails((prev) => {
    return {...prev,[e.target.name]:e.target.value}
  })

}


  const submitOrder = async (e) => {
    e.preventDefault()
  try{
   const orderdata = {products:cart.products,userId:cart.userId,total:cart.total,...orderDetails}
    const ordersubmit = await axios.post(`${apiUrl}/order/add`,orderdata,{
      headers:{
        "token":user.token
       }
    })
    console.log(ordersubmit)
   
    
   

    alert("Order Succesfull")



    navigate(`/receipt/${ordersubmit.data._id}`)
  

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


</div>
   </>
  )
}

export default CheckOut