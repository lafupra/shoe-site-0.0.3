import React from 'react'
import "./PaymentFailer.scss"
import {Link} from "react-router-dom"

const PaymentFailer = () => {
  return (
<>
<section className="paymentFailer">
  <h2>Payment Failed</h2>
  <p>Sorry, your payment was unsuccessful.</p>
  <p>Please check your payment details and try again.</p>
  <Link to={"/checkout"}><button>Return to Checkout</button></Link>
</section>
</>
  )
}

export default PaymentFailer