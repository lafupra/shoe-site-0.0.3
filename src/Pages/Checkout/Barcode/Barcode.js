import React from 'react'
import barcode from "../../../Assets/compressed-images/barcode.jpeg"
import "./Barcode.css"

const Barcode = () => {
  return (
   <>
   <div className="barcode-container">

    <div className="barcode-note">
    <div className="barcode-title">Must Read</div>
    <hr className="barcode-hr"/>
    <div className="barcode-description">to purchase the item you have to first do payment by scanning Qr Code below and then have to enter <span style={{color:"red"}}>Upi Ref No. </span> of payment  below</div>
    </div>

    <div className="barcode-code">
         <img     width="100%" height="100%"  src={barcode}  alt="barcode" /> 
    </div>

   </div>
   </>
  )
}

export default Barcode