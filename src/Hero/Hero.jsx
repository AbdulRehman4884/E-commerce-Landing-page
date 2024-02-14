import React from 'react'
import './Hero.css'
import hand_icon from '../Components/Assets/hand_icon.png'
import arrow from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'
function Hero() {
  return (
    <div className='hero'>
        <div className='left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand'>
                    <p>new</p>
                    <img src={hand_icon } alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div  className='latest'>
                <div>Latest Collection</div>
                <img src={arrow} alt="" />
            </div>
        </div>
        <div className='right'>
        
            <img src={hero_image} alt="" />
        </div>
        
        

    </div>
  )
}

export default Hero