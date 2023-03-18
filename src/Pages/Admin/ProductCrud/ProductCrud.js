import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./ProductCrud.css"
import {useSelector} from "react-redux"
import { apiUrl } from '../../../Data'

const ProductCrud = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(20);
    const [thumbnailImg,setThumbnailImg] = useState("")
    const [thumbnailImgUrl,setThumbnailImgUrl] = useState("dsfasdfa")
    const [imgUrls,setImgUrls] = useState([])
    const [img1,setImg1] = useState("")
    const [img2,setImg2] = useState("")
    const [img3,setImg3] = useState("")
    const [brand,setBrand] = useState("")
    const [category,setCategory] = useState("")
    const [size,setSize] = useState(["xl"])
   
    console.log("render")
  
    const user = useSelector((state) => state.user.user)
    
    const getdata = async () => { 
      try{
  
        const {data} = await axios.get(`${apiUrl}/product`)
  
       setProducts(data);
        
      }catch(err){
        console.log(err)
      }
  
     } 
  
  
    useEffect(() => {
      // fetch products from API or database
  
  
     getdata()
       
    }, []);
  
  
    // upload images
    
   const upload = async (imagename) => {
  
   
  
  
    if(imagename === "thumbnail" ){
      const data = new FormData()
      data.append("file",thumbnailImg)
      data.append("upload_preset","preset")
      try{
    
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dmjirtb40/image/upload `,data)
    
      setThumbnailImgUrl(`https://res.cloudinary.com/dmjirtb40/image/upload/v1678168289/${res.data.public_id}`)
      alert("thumbnail image done")
  
      }catch(err){
        console.log(err)
      }
  
    }else if(imagename === "pimg1"){
  
      const data = new FormData()
      data.append("file",img1)
      data.append("upload_preset","preset")
      try{
    
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dmjirtb40/image/upload `,data)
       const imgurls = `https://res.cloudinary.com/dmjirtb40/image/upload/v1678168289/${res.data.public_id}`
      setImgUrls([...imgUrls,imgurls])
      alert("first image done")
      }catch(err){
        console.log(err)
      }
  
    }else if(imagename === "pimg2"){
      const data = new FormData()
      data.append("file",img2)
      data.append("upload_preset","preset")
      try{
    
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dmjirtb40/image/upload `,data)
       const imgurls = `https://res.cloudinary.com/dmjirtb40/image/upload/v1678168289/${res.data.public_id}`
      setImgUrls([...imgUrls,imgurls])
      alert("second image done")
      }catch(err){
        console.log(err)
      }
    }else{
      const data = new FormData()
      data.append("file",img3)
      data.append("upload_preset","preset")
      try{
    
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dmjirtb40/image/upload `,data)
       const imgurls = `https://res.cloudinary.com/dmjirtb40/image/upload/v1678168289/${res.data.public_id}`
      setImgUrls([...imgUrls,imgurls])
  
      alert("third image done")
      }catch(err){
        console.log(err)
      }
  
    }
  
    
    
    
    
  
     }
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
   
      const product = {
        "name":name,
        "description": description,
        "brand": brand,
        "category": category,
        "price": price,
        "color": "",
        "sizes": size,
        "imageUrls":imgUrls,
        "thumbnailimageUrl":thumbnailImgUrl
      }
   
     
   
         setProducts([...products, product]);
  
  
  

  
         try{
  
  
  
  
          const res = await axios.post(`${apiUrl}/product/add`,product,{
           headers:{
             "token ": user.token
           }
           })
  
  
  
          res && alert("product submited")
          
  
         }catch(err){
           console.log(err)
           alert("some error occoured")
         }
         
      
  
    
    };
  
  
   
    const handleDelete = async (id) => {
  
  
      const deletedproduct = await axios.delete(`${apiUrl}/product/delete/${id}`,{headers:{
        "token": user.token
      }})
  
    deletedproduct && alert("product has been deleted")
  
      getdata()
      
      
      
    };
  
  
  
  
  
  return (
    <div className="productcontainer">
    <form onSubmit={handleSubmit} className="add-product-form">
      <h1 className="add-product-heading"> Add Product</h1>
      <div className="form-group">
        <label htmlFor="name" className="add-product-label">Product Name</label>
        <input
          type="text"
          id="name"
          className="add-product-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="add-product-label">Product Description</label>
        <textarea
          id="description"
          className="add-product-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">Product Price</label>
        <input
          type="number"
          id="price"
          className="add-product-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">Thumbnail image</label>
        <input
          type="file"
          id="thumbnaiimage"
          className="add-product-input"
          onChange={(e) => setThumbnailImg(e.target.files[0])}
          required
        />
         <button className="upload" onClick={() => upload("thumbnail")} >upload</button>
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">product image 1</label>
        <input
          type="file"
          id="img1"
          className="add-product-input"
          onChange={(e) => setImg1(e.target.files[0])}
          required
        />
          <button className="upload"  onClick={() => upload("pimg1")} >upload</button>
      </div>
  
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">product image 2</label>
        <input
          type="file"
          id="img2"
          className="add-product-input"
          onChange={(e) => setImg2(e.target.files[0])}
          required
        />
          <button className="upload"  onClick={() => upload("pimg2")} >upload</button>
      </div>
  
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">product image 3</label>
        <input
          type="file"
          id="img3"
          className="add-product-input"
          onChange={(e) => setImg3(e.target.files[0])}
          required
        />
          <button className="upload"  onClick={()  => upload("pimg3")} >upload</button>
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">brand</label>
        <input
          type="text"
          id="brand"
          className="add-product-input"
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">category</label>
        <input
          type="text"
          id="category"
          className="add-product-input"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" className="add-product-label">sizes</label>
        <input
          type="text"
          id="category"
          className="add-product-input"
          onChange={(e) => setSize(e.target.value.split(","))}
          required
        />
      </div>
      
      <button type="submit" className="add-product-btn">Add Product</button>
    </form>
    <table className="product-table">
      <thead>
        <tr>
        <th>no.</th>
        <th>thumnailimg</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Sizes</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((product,i) => (
          <tr key={product._id}>
          <td>  {i + 1}</td>
          
        <td><img src={product.thumbnailimageUrl} alt={product.thumbnailimageUrl}  width="100px" height="100px"/></td>
  
     <td>{product.name}</td>
  
  <td>{product.description}</td>
  
        
  <td>{product.price}</td>
  <td>{product.sizes}</td>

          
            
            <td>
              <button className="delete-btn" onClick={() => handleDelete(product._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default ProductCrud