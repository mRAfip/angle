import React from 'react'

import './footer.css'


import logoFooter from '../images/logo.png'

function footer() {
  return (
    <div>


        <div className='customer-care-div'>

            <h5 className='customer-care-head'>Need help? Call our award-winning support team at 040-67607600</h5>

        </div>

        <div className='footer-div'>

            <div className='footer-item-div'>

                <h4 className='footer-link-head'>Company</h4>

                 <a href='#' className='footer-link'>About</a>
                 <a href='#' className='footer-link'>Careers</a>
                 <a href='#' className='footer-link'>Blog</a>
                 <a href='#' className='footer-link'>Contact</a>
                 <a href='#' className='footer-link'>Social Responsibility</a>
                 <a href='#' className='footer-link'>Investor Relationships</a>

            </div>

            <div className='footer-item-div'>

                <h4 className='footer-link-head'>Support</h4>

                <a href='#' className='footer-link'>Website</a>
                <a href='#' className='footer-link'>Hosting</a>
                <a href='#' className='footer-link'>Domain</a>
                <a href='#' className='footer-link'>Email</a>
                <a href='#' className='footer-link'>Ecommerce</a>
                <a href='#' className='footer-link'>Community</a>

            </div>

            <div className='footer-item-div'>

                <h4 className='footer-link-head'>Resources</h4>

                <a href='#' className='footer-link'>Partner</a>
                <a href='#' className='footer-link'>Marketing</a>
                <a href='#' className='footer-link'>Instagram</a>
                <a href='#' className='footer-link'>YouTube</a>
                <a href='#' className='footer-link'>Learning</a>
                
            </div>

            <div className='footer-item-div'>

                <h4 className='footer-link-head'>Partner Programmes </h4>

                <a href='#' className='footer-link'>Affiliates</a>
                <a href='#' className='footer-link'>Reseller</a>
                <a href='#' className='footer-link'>Marketing Partner</a>
                <a href='#' className='footer-link'>Production Community</a>
                <a href='#' className='footer-link'>Agency</a>
               
            </div>
            
           
        </div>

        <div className='line'>

        </div>

        <div className='bootom-footer'>

            <img className='logo-footer' src={logoFooter} alt='logo'></img>

            <div className='bootom-right-div'>

               <a href='#' className='bootom-right-div-link'> &copy; 2023 Your Website Name. All rights reserved.</a>

               <a href='#' className='bootom-right-div-link'> Terms & Conditions </a>

               <a href='#' className='bootom-right-div-link'> Privacy Policy </a>

                
            </div>

        </div>

      
    </div>
  )
}

export default footer
