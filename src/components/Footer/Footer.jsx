import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
         <hr />
        <div className="footerCont">

        <div className="footLink">
            <div className="footLogo">
                <img src="/images/Frame8.png" alt="nav logo" />
            </div>
                <p>HOME</p>
                <p>QUICK NAVIGATIONS</p>
                <p>OUR PRODUCTS</p>
                <p>CONTACT US</p>
                <p>ABOUT US</p>
                <p>LOCATION</p>
        </div>
            
        <div className="footIcons">
            <img src="/images/xfooter.jpg" alt="" />
            <img src="/images/ffooter.jpg" alt="" />
            <img src="/images/ifooter.jpg" alt="" />
        </div>

        <div className="footText">Please Follow Us !</div>
    </div>
    </div>
  )
}

export default Footer
