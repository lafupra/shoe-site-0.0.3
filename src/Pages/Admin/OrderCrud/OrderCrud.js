import React,{useState,useEffect,useCallback}from 'react'
import "./OrderCrud.css"
import axios from "axios"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../../Data'



const OrderCrud = () => {
    const[orders,setOrders] = useState([{}])
    const [loading,setLoading] = useState(false)
    const user = useSelector((state) => state.user.user)
    const navigate = useNavigate()
    console.log("render")

const getorderdata = useCallback(async () => {
    try{
        setLoading(true)
        const res = await axios.get(`${apiUrl}/order`,{headers:{
            "token":user.token
          }})
        
           setOrders(res.data)
           setLoading(false)

    }catch(err){
        console.log(err)
    }
},[user.token])

useEffect(() => {
    getorderdata()
},[getorderdata])


const handleDelete = async (oid) => {
  
  
    const deletedorder = await axios.delete(`${apiUrl}/order/delete/${oid}`,{headers:{
      "token":user.token
    }})


    console.log(deletedorder)

    getorderdata()
    
    
    
  };


  
const handleOrder = async (oid) => {
  
   navigate(`/receipt/${oid}`)
  
  
  
};

    
  return (
    <>
       {loading && 
     <div className="spinner-container">
   <div className="loading-spinner">
    </div>
   </div>
  }
    <div className="users">
 
    <table className="product-table">
 
      <thead>
        <tr>
        <th className='head'>no.</th>
         
          <th>userId</th>
          <th>total</th>
          <th>paymentStatus</th>
          <th>deliveryStatus</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  
 { orders.map((order,i) => (
          <tr key={i}>
          <td>{i + 1}</td>
          
  
     <td>{order.userId}</td>
  
  <td>{order.total}</td>
  {order.paymentStatus ? <td> "payment checked" </td> : <td> "payment not checked" </td>}
  {order.deliveryStatus ? <td> "delivered" </td> : <td> "not delivered" </td>}
        
  


        
 
      
            <td>
              <button className="delete-btn" onClick={() => handleDelete(order._id)}>Delete</button>
              <button className="delete-btn" onClick={() => handleOrder(order._id)}>Get Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    
    </>)
}

export default OrderCrud