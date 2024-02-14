import React from 'react'
import './Footer.css'
import logo from '../Components/Assets/logo_big.png'
import instagram from '../Components/Assets/instagram_icon.png'
import pintester from '../Components/Assets/pintester_icon.png'
import whatsapp from '../Components/Assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
        <div className="footerlogo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footerlinks">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footericons">
            <div className="footericoncontainer">
                <img src={instagram} alt="" />
            </div>
        
        
            <div className="footericoncontainer">
                    <img src={pintester} alt="" />
            </div>
                
            <div className="footericoncontainer">
                    <img src={whatsapp} alt="" />
            </div>
           
        </div>
        <div className="footercopyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
    </div>
  )
}

export default Footer
