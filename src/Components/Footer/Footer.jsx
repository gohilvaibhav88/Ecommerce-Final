import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icom from '../Assets/whatsapp_icon.png'
import pinterst_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Shopify</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" className="image"/>
            </div>
            <div className="footer-icons-container">
                <img src={pinterst_icon} alt="" className="image"/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icom} alt="" className="image"/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
