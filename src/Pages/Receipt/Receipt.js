import React,{useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"
import axios from "axios"
import { useSelector } from 'react-redux'
import { apiUrl } from '../../Data'
import "./Receipt.css"

const Receipt = React.forwardRef((prop,ref) => {

const oid = useLocation().pathname.split("/")[2]
const user = useSelector(state => state.user.user)
const [orderDetails,setOrderDetails] = useState({})
const [date,setDate] = useState("")
const [time,setTime] = useState("")






const getorder = async () => {
    const {data} = await axios.get(`${apiUrl}/order/${oid}`,{headers:{"token":user.token}})
     
    setOrderDetails(data)

  

}




const convertdate = () => {
        const newdate = new Date(orderDetails.createdAt) 
        let date = JSON.stringify(newdate)
        
        date = date.slice(1,11)
       
        const originalDate = date;
const parts = originalDate.split("-");
const reversedDate = parts.reverse().join("-");
        setDate(reversedDate)

        const originalDateTime = newdate;
        const dateObj = new Date(originalDateTime);
        const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        setTime(formattedTime);
      
       

      
        
       


}
 






useEffect(() => {

 if(oid){


getorder()
}

if(orderDetails){

convertdate()

}
 

 },[oid,orderDetails.createdAt])





  return (
    <>
    <div className="receipt-container" ref={ref}>


        {/* receipt name,logo,address container */}
        <div className="receipt-container1">
            <div className="logo-contact border-left">
              <div className="cell1">
               logo
              </div>
              <div className="cell1 ">
                  no
                </div>

            </div>
            <div className="company-address">

            <div className="cell1">
                  Customer Address 
                </div>

                <div className="cell1">
                  {orderDetails.address} 
                 
                </div>
                <div className="cell1">
                city:-{orderDetails.city} 
                 
                </div>

                <div className="cell1">
                State:-{orderDetails.state} 
                 
                </div>

                
                <div className="cell1">
                zipCode:-{orderDetails.zipCode} 
                 
                </div>

                

            </div>
        </div>

{/* customer info container */}
        <div className="receipt-container2">
            <div className="rcontainer21 border-left">

            <div className="cell1">
                  Order Id :- {orderDetails._id}
                </div>

                <div className="cell1">
                  Upi Ref No. :- {orderDetails.upiRefNo}
                </div>
              

            </div>
            <div className="rcontainer22">
            <div className="cell1">
                  Date:- {date}
                </div>
                <div className="cell1">
                  Time:- {time}
                </div>
                <div className="cell1">
                  Username:- {user.name}
                </div>
                <div className="cell1">
                  Email:- {user.email}
                </div>
            </div>
            <div className="rcontainer23">


            <div className="cell1">
                  Sold By
                </div>
                <div className="cell1">
               
                AMBEDKAR NAGAR ST NO.14 ,80 FEET ROAD
                </div>
                <div className="cell1">
                city:- Rajkot
                 
                </div>

                <div className="cell1">
                State:- Gujarat
                 
                </div>

                
                <div className="cell1">
                zipCode:- 360003
                 
                </div>
                
          </div>
        </div>

{/* order detail container */}
      <div className="receipt-container3"> 

      {/* first row */}


      <table className="table1">
      
            <thead>
          <tr>
          <th className="cell">No.</th>
    <th className="cell" >Name</th>
    <th className="cell" >Pid</th>
    <th className="cell" >quantity</th>
    <th className="cell">subtotal</th>

          </tr>
 

            </thead>
            <tbody>

 {orderDetails.products && orderDetails.products.map((item,i) => (
   <tr key={i}>
 <td className="cell" >{i+1}</td>
    <td className="cell">{item.name}</td>
    <td className="cell" >{item._id}</td>
    <td className="cell" >{item.quantity}</td>
    <td className="cell" >{item.subtotal}</td>

 </tr>))}
{/* last row */}
  <tr>
  <td ></td>
    <td ></td>
    <td ></td>
    <td className="cell" >Total</td>
    <td className="cell" >{orderDetails.total}</td>
  </tr>


    

        </tbody>





 
   
  
 
</table>

<div className="query">

    Note:- for any query please contact at No:- 9328154895
    
    </div>

        </div>

  
        

    </div>
    </>
  )
})

export default Receipt