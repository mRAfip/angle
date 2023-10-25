import React from 'react'

import './mainproduct.css'

function MainProduct() {
  return (
    <div className='container-fluid main-product'>

        <div className='main-product-item-div'>

                <h1 className='main-product-item-div-head'>Professional Email</h1>
                <p className='main-product-item-div-para'>Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</p>
        
                <h5 className='main-product-item-div-sub-head'>₹ 29.00 per user/mo</h5>

                <button className='main-product-item-div-btn'>Explore Plan</button>
       
       
        </div>
        <div className='main-product-item-div'>

                <h1 className='main-product-item-div-head'>Hosting</h1>
                <p className='main-product-item-div-para'>Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</p>

                <h5>₹ 29.00 per user/mo</h5>
            
                <button className='main-product-item-div-btn'>Explore Plan</button>

        </div>
        <div className='main-product-item-div'>

                <h1 className='main-product-item-div-head'>Websites</h1>

                <p className='main-product-item-div-para'>Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</p>

                <h5>₹ 29.00 per user/mo</h5>

                <button className='main-product-item-div-btn'>Explore Plan</button>

        </div>
      
    </div>
  )
}

export default MainProduct
