import React,{useState,useEffect,useCallback} from 'react'
import axios from "axios"
import "./UserCrud.css"
import { useSelector } from 'react-redux'
import { apiUrl } from '../../../Data'

const UserCrud = () => {

    const[users,setUsers] = useState([{}])
    const user = useSelector((state) => state.user.user)
    const [loading,setLoading] = useState(false)
    console.log("render")

    const getuserdata = useCallback(async () => {
      try{
         setLoading(true)
          const res = await axios.get(`${apiUrl}/user?page=0&limit=10`,{headers:{
              "token":user.token
            }})
          
             setUsers(res.data)
             setLoading(false)
  
      }catch(err){
          console.log(err)
      }
  },[user.token])

useEffect(() => {

getuserdata()

},[getuserdata])


const handleDelete = async (id) => {
  
  
    const deletedproduct = await axios.delete(`${apiUrl}/user/delete/${id}`,{headers:{
      "token":user.token
    }})


    console.log(deletedproduct)

    getuserdata()
    
    
    
  };

    
  return (
    <>
        {loading && 
     <div className="spinner-container">
   <div className="loading-spinner">
    </div>
   </div>
  }
    <div className="users">

    <table className="product-table1">
      <thead>
        <tr>
        <th className="head1">no.</th>
         
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="tablebody">
        {users && users.map((user,i) => (
          <tr key={i}>
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