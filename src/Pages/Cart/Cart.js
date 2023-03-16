import React from 'react'
import "./Cart.css"
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import {changeqauntity, removecartitems,addtotal} from "../../Redux/userRedux"


const Cart = () => {
  const handleLinkClick = () => {
    window.scrollTo(0,0)
    dispatch(addtotal({total}))
  }

  const cartproducts = useSelector(state => state.user.cart.products)

  const dispatch = useDispatch()
  
  let total = 0

  const Total = (subtotal) => {

    total = total + subtotal

  }
 
  
  return (
    <>
    <div className="cart-section">
  <h2>Shopping Cart</h2>
  <table className="cart-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
     {cartproducts && cartproducts.map((item,i) => 
    
     
     (
              
            <tr key = {i}>
            <td>
              <div className="cart-item">
                <img src={item.thumbnailimageUrl} alt="Shoe"/>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Size: {item.sizes}</p>
                  <button className="cart-button-small" onClick={() =>  dispatch(removecartitems({_id : item._id}))}>Remove</button>
                </div>
              </div>
            </td>
            <td>{item.price}</td>
            <td>
              <input type="number" min="1" placeholder='1' onChange={(e) =>  dispatch(changeqauntity({_id : item._id,quantity : e.target.value}))} />
            </td>
            <td onLoad ={Total(item.subtotal)}>{item.subtotal}</td>
          </tr>
    
 

     )

  
          
     
     )
   
 
     } 
      
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="3">Subtotal</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td colSpan="3">Shipping</td>
        <td>$0.00</td>
      </tr>
      <tr>
        <td colSpan="3">Total</td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  <div className="cart-buttons">
    <Link to={'/'} onClick={handleLinkClick}><button  className="cart-button">Continue Shopping</button></Link>
    <Link to={'/checkout'} onClick={handleLinkClick}><button  className="cart-button">Checkout</button></Link>
  </div>
</div>
    </>
  )
}

export default Cart