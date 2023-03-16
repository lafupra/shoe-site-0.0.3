import React,{useState} from 'react'
import "./Shoes.css"
import {Link} from "react-router-dom"
import product1 from "../Assets/compressed-images/hero-section-image.jpg"
import product2 from "../Assets/compressed-images/product-image2.jpeg"
import product3 from "../Assets/compressed-images/product-image3.webp"
import categoryimg1 from "../Assets/compressed-images/category-image1.jpeg"
import categoryimg2 from "../Assets/compressed-images/category-image2.webp"
import categoryimg3 from "../Assets/compressed-images/category-image3.webp"
import MenCard from "./Mens/MenCard/MenCard"
import axios from "axios"
import { useSelector } from 'react-redux'
import { apiUrl } from '../Data'

const Shoes = () => {
  const handleLinkClick = () => {
		window.scrollTo(0, 0);
	  };

    const [searchres,setSearchres] = useState("")
    const [searchinput,setSearchinput] = useState("")
    const user = useSelector(state => state.user)
    console.log(user)

    const searchProduct = async () => {
             try{

              const res = await axios.post(`${apiUrl}/product/search?q=${searchinput}`)
          
              setSearchres(res.data)

             }catch(err){
              console.log(err)
             }
    }

  return (
    <>
  
	<section className="hero">
		<div className="herocontainer">
			<h2>Shop the latest collection of shoes online</h2>
            <div className="search">
  <input className='searchinput' type="text" name="search" placeholder="Search..." onChange={(e) => setSearchinput(e.target.value)}/>
  <button className="searchbtn" onClick={searchProduct} >Search</button>
</div>
		</div>
	</section>

  {/* search section */}

  {searchres && <div className="search-products">
    {searchres?.map((item) => (
      <MenCard key = {item._id} item = {item} />
    ) )} 
    
</div> }



	<section className="products">
		<div className="productcontainer">
			<h2>New Arrivals</h2>
			<div className="product-items">
				<div className="product-item">
        <Link to={"/men"} onClick={handleLinkClick}><img className="productImage" src={product1} alt="Shoe 1"/></Link>
					<h4>Adidas Originals</h4>
					<p>$99.99</p>
					<Link to={"/men"} onClick={handleLinkClick}><button className="productbtn">Add to Cart</button></Link>
				</div>
				<div className="product-item">
        <Link to={"/men"} onClick={handleLinkClick}><img className="productImage" src={product2} alt="Shoe 2"/></Link>
       <h4>Nike Air Force 1</h4>
					<p>$119.99</p>
          <Link to={"/men"} onClick={handleLinkClick}><button className="productbtn">Add to Cart</button></Link>
				</div>
				<div className="product-item">
        <Link to={"/men"} onClick={handleLinkClick}><img className="productImage" src={product3} alt="Shoe 3"/></Link>
					<h4>Puma RS-X</h4>
					<p>$89.99</p>
          <Link to={"/men"} onClick={handleLinkClick}><button className="productbtn">Add to Cart</button></Link>
				</div>
			</div>
		</div>
	</section>

  {/* categories section */}


<section className="categories">
  <h2>Shop by Category</h2>
  <div className="category-container">
    <div className="category">
     <Link to={"/men"} onClick={handleLinkClick}>
     <img src={categoryimg1} alt="Men's Shoes"/>
      <h3>Men's Shoes</h3>
      <button className="btn">Shop Now</button></Link> 
    </div>
    <div className="category">
    <Link to={"/men"} onClick={handleLinkClick}>
      <img src={categoryimg2} alt="Women's Shoes"/>
      <h3>Women's Shoes</h3>
      <button className="btn">Shop Now</button></Link>
    </div>
    <div className="category">
    <Link to={"/men"} onClick={handleLinkClick}>
      <img src={categoryimg3} alt="Kids' Shoes"/>
      <h3>Kids' Shoes</h3>
      <button className="btn">Shop Now</button></Link>
    </div>
  </div>
</section>

{/* testimonial section */}
<section className="testimonial-section">
  <div className="testimonialcontainer">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        <p className="testimonial-text">"I love the quality of the shoes and the excellent customer service. Will definitely be ordering from here again!"</p>
        <p className="testimonial-author">- John Doe</p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-text">"These shoes are so comfortable and stylish. I've been getting compliments all day!"</p>
        <p className="testimonial-author">- Jane Smith</p>
      </div>
    </div>
  </div>
</section>

{/* end of categories section */}







    </>
  )
}

export default Shoes