import './index.css'
import USA from '../Images/USA.jpg'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import gpay from '../Images/gpay.jpg'
import mastercard from '../Images/mastercard.jpg'
import paypal from '../Images/paypal.jpg'
import apple from '../Images/apple.jpg'
import amex from '../Images/amex.jpg'
import pay from '../Images/pay.jpg'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState } from 'react';



const Footer = () => {

    const [menu,setMenu]=useState(false)
  

    const onClickMenu=()=>{
        setMenu(prevState=>!prevState)
    }

    return (
        <div className='footer-container'>
            <div className='footer-section'>
                <div className='footer-header-card'>
                    <div>
                        <h1 className='footer-header'>Be the first to know</h1>
                        <p className='footer-sign-description'>Sign up for updates from mettā muse.</p>
                        <input type='email' placeholder='Enter your email' className='input-box' />
                        <button className='sub-btn'>SUBSCRIBE</button>
                    </div>
                    <div className='contact-us'>
                        <h1 className='contact-head'>CONTACT US</h1>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h1 className='contact-head'>CURRENCY</h1>
                        <div className='usa-logo-card'><img src={USA} className='usa-logo' alt="usa logo"/>USD</div>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className='footer-below-section'>
               
                <div className='menu-section'>
                    <h1 className='title-one'>mettā muse </h1>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className='quick-link-section'>

                    <h1 className='title'>QUICK LINKS</h1>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            

                <div className='desktop-hide'>

                    <div className='menu-section-mobile'>
                    <div className='mobile-metta-use'>    <h1 className='title-one'>mettā muse </h1><div onClick={onClickMenu}>{menu?<BsChevronDown/>:<BsChevronUp/>}</div></div>
                    {menu&&
                    
                    <><p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                        </> 
                    
                    }
                    </div>
                    <hr/>
                    <div className='quick-link-section-mobile'>

                    <div className='mobile-metta-use'>    <h1 className='title-one'>QUICK LINKS </h1><div onClick={onClickMenu}>{menu?<BsChevronDown/>:<BsChevronUp/>}</div></div>
                     {menu&& <> <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        </>
                        } 
                    </div>
                    <hr/>

                </div>
                <div className='follow-section'>
                    <h1 className='title'>FOLLOW US</h1>

                    <div className='follow-icons'>
                        <div className='icon-border'><AiFillInstagram style={{ color: 'white', fontSize: '30px' }} /></div>
                        <div className='icon-border'><FaLinkedin style={{ color: 'white', fontSize: '28px' }} /></div>
                    </div>

                    <h1 className='payment-options'>mettā muse Accepts</h1>
                    <div className='payment-methods'>
                        <div className='pay-border'><img src={gpay} className='payment-logo' alt="gpay logo"/></div>

                        <div className='pay-border'><img src={mastercard} className='payment-logo' alt="mastercard logo"/></div>


                        <div className='pay-border'><img src={paypal} className='payment-logo' alt="paypal logo"/></div>

                        <div className='pay-border'><img src={amex} className='payment-logo-amex' alt="amex logo"/></div>
                        <div className='pay-border'><img src={apple} className='payment-logo' alt="apple logo"/></div>
                        <div className='pay-border'><img src={pay} className='payment-logo-amex' alt="pay logo"/></div>

                    </div>

                </div>

            </div>
            <p className='copyright'>Copyright © 2023 mettamuse. All rights reserved.</p>

        </div>
    )
}

export default Footer