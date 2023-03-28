import React from 'react'
import { useLocation } from 'react-router-dom'
 import "./PaymentSuccess.scss"

const PaymentSuccess = () => {
  
 const payid = useLocation().pathname.split("/")[2]

  return (
   <>
   <section className="paymentSuccess">
  <h2>Payment Successful</h2>
  <p>Thank you for your purchase!</p>
  <p>Your payment_id = <span style={{color:"red"}}>{payid}</span></p>
  <p>Your order will be shipped to the address provided within the next 3-5 business days.</p>
</section>
   </>
  )
}

export default PaymentSuccess