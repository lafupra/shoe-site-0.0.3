import React from 'react'
import "./MenCard.css"
import {Link} from "react-router-dom"


const MenCard = ({item}) => {
  const handleLinkClick = () => {
		window.scrollTo(0, 0);
	  };
  return (
    <>
   <div className="product-list-card">
  <div className="product-list-card-image">
  <Link to={`/singleproduct/${item._id}`} onClick={handleLinkClick}> <img width="200px" height="200px" src={item.thumbnailimageUrl} alt="Professional Shoe"/></Link>
  </div>
  <div className="product-list-card-details">
    <h3 className="product-list-card-title">{item.name}</h3>
    <p className="product-list-card-price">₹ {item.price}</p>
    <p className="product-list-card-description"> {item.description}</p>
    <Link to={`/singleproduct/${item._id}`} onClick={handleLinkClick}> <button className="product-list-card-button">Add to Cart</button></Link>
  </div>
</div>
    </>
  )
}

export default MenCard