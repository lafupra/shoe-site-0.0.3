import {useState} from "react"
import { loginTable } from "./LoginStyle";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";
import {submituser} from "../../../Redux/userRedux"
import { apiUrl } from "../../../Data";


const Login = () => {

   const [loginUser,setLoginUser] = useState({})
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = useSelector(state => state.user.user)
   const cart = useSelector(state => state.user.cart)
  //  const state = useSelector(state => state.user)
  

 
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    // now send to backend
    try{
const res = await axios.post(`${apiUrl}/auth/login`,loginUser)
if(!res) {  console.log("not authorised")}
     setLoginUser(res.data)
     dispatch(submituser(res.data))

console.log(user)
console.log(cart)


   navigate("/")

    }catch(err){
      console.log(err)
    }

  
    };

    const handleChange = (e) => {
   

      setLoginUser((prev) => {
        return {...prev,[e.target.name]:e.target.value}
      })

    }
    
  return (
    <>

 

<div   style={loginTable.main}>

  <h1  style={loginTable.heading} >Login</h1>
  
  <div className="form-group">
    <label className="login-label">Email Address</label>
    <input
      type="email"
      name="email"

      className="login-input"
      
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label className="login-label">Password</label>
    <input
      type="password"
      name="password"
      className="login-input"
     
      onChange={handleChange}
      required
    />
  </div>

  <div  style={loginTable.checkBox}>
    <input type="checkbox"  style={loginTable.check} />
    <label >Remember Me</label>
  </div>
  <button onClick={handleSubmit} type="submit"style={loginTable.loginBtn}>Login</button>

</div>




    </>
  )
}

export default Login