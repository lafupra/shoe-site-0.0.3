import React,{useState,useEffect,useCallback}from 'react'
import "./Men.css"
import MenCard from './MenCard/MenCard'
import axios from "axios"
import { apiUrl } from '../../Data'

const Men = () => {
const [products,setProducts] = useState([])
const [loading,setLoading] = useState(false)


console.log("render")

const getdata =  useCallback( async () => { 

  try{
   

     

   setLoading(true)
  
    const {data} = await axios.get(`${apiUrl}/product`)
   
   setProducts(data);

   setLoading(false)
   
    
  }catch(err){
    console.log(err)
  }

 },[])


 useEffect(() => {


  getdata()

 },[getdata])







  return (
   <>

   <div className="men-section">
    {/* filter sidebar */}
   <div className="filter-menu">
  <h3>Filter Results</h3>
  <div className="filter-price">
    <h4>Price Range</h4>
    <ul>
      <li><label ><input type="checkbox" id="price-1"/> Under $50</label></li>
      <li><label><input type="checkbox" id="price-2"/> $50-$100</label></li>
      <li><label ><input type="checkbox" id="price-3"/> $100-$200</label></li>
      <li><label ><input type="checkbox" id="price-4"/> Over $200</label></li>
    </ul>
  </div>
  <div className="filter-color">
    <h4>Color</h4>
    <ul>
      <li><label ><input type="checkbox" id="color-black"/> Black</label></li>
      <li><label ><input type="checkbox" id="color-brown"/> Brown</label></li>
      <li><label ><input type="checkbox" id="color-tan"/> Tan</label></li>
      <li><label ><input type="checkbox" id="color-gray"/> Gray</label></li>
    </ul>
  </div>
  <button className="filter-button">Apply Filters</button>
</div>

{/* product section */}

 <div className="men-products">
  
  {loading ?   <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div> :<> {products?.map((item) => (
      <MenCard key = {item._id} item = {item} />
    ) )}  </> }  


    
  
  
    
</div>

   </div>

   </>
  )
}

export default Men