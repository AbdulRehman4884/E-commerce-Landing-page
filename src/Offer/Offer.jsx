import React from 'react'
import './Offer.css'
import exclusive from '../Components/Assets/exclusive_image.png'
function Offer() {
  return (
    <div className='offer'>
        <div className='left-offer'>
            <h1>Exclusive</h1>
            <h1>Offer for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='right-offer'>
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offer