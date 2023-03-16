import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./UserCrud.css"
import { useSelector } from 'react-redux'
import { apiUrl } from '../../../Data'

const UserCrud = () => {

    const[users,setUsers] = useState([{}])
    const user = useSelector((state) => state.user.user)

const getuserdata = async () => {
    try{
       
        const res = await axios.get(`${apiUrl}/user?page=0&limit=10`,{headers:{
            "token":user.token
          }})
        
           setUsers(res.data)

    }catch(err){
        console.log(err)
    }
}

useEffect(() => {
    getuserdata()
},[])


const handleDelete = async (id) => {
  
  
    const deletedproduct = await axios.delete(`${apiUrl}/user/delete/${id}`,{headers:{
      "token":user.token
    }})


    console.log(deletedproduct)

    getuserdata()
    
    
    
  };

    
  return (
    <>
    <div className="users">
    <table className="product-table">
      <thead>
        <tr>
        <th>no.</th>
         
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user,i) => (
          <tr key={user._id}>
          <td>  {i + 1}</td>
          
  
     <td>{user.name}</td>
  
  <td>{user.email}</td>
  
        
 
          
            
            <td>
              <button className="delete-btn" onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
    
    </>
  )
}

export default UserCrud