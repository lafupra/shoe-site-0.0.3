import {useState} from "react"
import { loginTable } from "./LoginStyle";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { apiUrl } from "../../../Data";

const Register = () => {

  const [registerUser,setRegisterUser] = useState({})
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  // now send to backend

  try{
const res = await axios.post(`${apiUrl}/auth/register`,registerUser)

   setRegisterUser(res.data)
   navigate("/login")
  }catch(err){
    console.log(err)
  }
  



  };

  const handleChange = (e) => {
 

    setRegisterUser((prev) => {
      return {...prev,[e.target.name]:e.target.value}
    })

  }


  return (
    
    
   
<>

<div   style={loginTable.main}>

  <h1  style={loginTable.heading} >Login</h1>

  <div className="form-group">
    <label className="login-label">Name</label>
    <input
      type="email"
      name="name"

      className="login-input"
      
      onChange={handleChange}
      required
    />
  </div>
  
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
  <button onClick={handleSubmit} type="submit"style={loginTable.loginBtn}>Register</button>

</div>
</>

  )
}

export default Register