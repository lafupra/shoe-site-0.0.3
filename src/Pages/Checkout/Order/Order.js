import React from 'react'
import "./Order.css"
import {useSelector} from "react-redux"
const Order = () => {
    const order = useSelector(state => state.user.cart.products)
    const cart = useSelector(state => state.user.cart)
  
   

   
      

    
  return (
   <>
   <div className="order-container">
    <div className="order-summery">Order Summery</div>
    <hr className="order-line"/>
    <div className="order-table">

    <div className="order-tr">
        <div className="order-table-item">
            No.
        </div>
        <div className="order-table-item">
            Name
        </div>
        <div className="order-table-item">
            quantity
        </div>
        <div className="order-table-item">
            subtotal
        </div>
    </div>



     {order && order.map((item,i) => (
         <div key={i} className="order-tr">
         <div className="order-table-item">
             {i+1}
         </div>
         <div className="order-table-item">
          {item.name}
         </div>
         <div className="order-table-item">
             {item.qauntity}
         </div>
         <div className="order-table-item">
             {item.subtotal}
         </div>
     </div>

     ))}
       

    

    <hr className="order-line"/>
    <div className="order-tr">

    <div className="order-table-item-total">
            Total
        </div>
        <div className="order-table-item">
            {cart.total}
        </div>

    </div>


    </div>

   </div>
   </>
  )
}

export default Order