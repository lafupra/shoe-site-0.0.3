import Shoes from "./Pages/Shoes"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Pages/ShoesComponent/Navbar/Navbar"
import Footer from "./Pages/ShoesComponent/Footer/Footer"
import Men from "./Pages/Mens/Men"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import Cart from "./Pages/Cart/Cart"
import Checkout from "./Pages/Checkout/Checkout"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Services from "./Pages/Services/Services"
import Login from "./Pages/Auth/Login/Login"
import Register from "./Pages/Auth/Register/Register"
import ProductCrud from "./Pages/Admin/ProductCrud/ProductCrud"
import UserCrud from "./Pages/Admin/UserCrud/UserCrud"
import Receipt from "./Pages/Receipt/Receipt"
import OrderCrud from "./Pages/Admin/OrderCrud/OrderCrud"
import PrintReceipt from "./Pages/Receipt/PrintReceipt"






function App() {


  return (
    <>
        
      <BrowserRouter  >
   
      <Navbar/>
    
      <Routes>
    

        <Route path="/" element={<Shoes/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/singleproduct/:pid" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/admin/product" element={<ProductCrud/>}/>
        <Route path="/admin/user" element={<UserCrud/>}/>
        {/* <Route path="/receipt/:oid" element={<Receipt/>}/> */}
        <Route path="/receipt" element={<Receipt/>}/>
        <Route path="/admin/order" element={<OrderCrud/>}/>
        <Route path="/receipt/:oid" element={<PrintReceipt/>}/>
       
       
       
      
     
        
    
      </Routes>
     
      <Footer/>

     
      </BrowserRouter>
     
    </>

    
   
  );
}

export default App;
