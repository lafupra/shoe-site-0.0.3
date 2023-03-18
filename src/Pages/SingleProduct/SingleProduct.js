import React,{useState,useEffect} from 'react'
import "./SingleProduct.css"
import {Link,useLocation} from "react-router-dom"
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import { submitcart } from '../../Redux/userRedux'
import { apiUrl } from '../../Data'




const SingleProduct = () => {
	const pid = useLocation().pathname.split('/')[2]
	const [product,setProduct] = useState(null)
	const [size,setSize] = useState("")
	const dispatch = useDispatch()
	const cartproducts = useSelector(state => state.user.cart.products)
	const cart = useSelector(state => state.user.cart)
	const user = useSelector(state=> state.user.user)
	
	
	
	console.log("render")

	  
	   useEffect(() => {

		const getdata = async () => { 
			try{
		
			  const {data} = await axios.get(`${apiUrl}/product/${pid}`)
		  
			 setProduct(data);
			 
			}catch(err){
			  console.log(err)
			}
		  
		   } 
	  
		getdata()
	  
	   },[pid])

	//    add to cart

	   const addToCart = (e) => {
		e.preventDefault()
	if(user._id === undefined) return alert("you are not logged in")

		const cart = {...product,sizes:size,quantity:1,subtotal:product.price}


		if(size === "" ) return alert("size not choosen")

		// to find there is no duplicate in the cart

		const mapcondition = cartproducts.map((item) => cart._id === item._id)
		const dupcondition =   mapcondition.find((item) => item === true)
	
		if(cartproducts.length > 0) { if(dupcondition) return alert("this product is already exits in your cart")} 

		
		
		
		dispatch(submitcart(cart))
		alert("added to cart")


	   }


  return (
    <>

  {product &&
  <div className="single-product-container">

  <div className="single-product-image">
	  <img  width="200px" height="200px" className="single-product-img"  src={product.thumbnailimageUrl} alt="Product Name"/>
  </div>
  <div className="single-product-details">


	  <h2>{product.name}</h2>
	  <p className="price">₹ {product.price}</p>
	  <p className="description">{product.description}</p>
	  <form>
		  <label >size</label>
		  <select name="size" onChange={(e) => setSize(e.target.value)}>
		  <option value="none chosen">options</option>
		
		  {product.sizes.map((item,i) => (
				<option key={i} value={item}>{item}</option>

			 ))} 
	
			
		  </select>
		 <div className="cart-add-view-button">
		  <button onClick={addToCart} type="submit">Add to Cart</button> 

		  </div>
		 {cartproducts.length !== 0 && user._id === cart.userId ? <Link to={"/cart"}><button type="submit">View Cart</button></Link> : "" } 
		
	  </form>
  </div>
</div> }  
    </>
  )
}

export default SingleProduct