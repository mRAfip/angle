import React  from 'react'

import './landingpage.css'
import Header from '../components/header/Navbar'

import Testimonial from '../components/testiSection/Testimonial'

import MainProduct from '../components/mainProduct/MainProduct'

import Banner  from '../components/webBanner/Banner'

import FooterDiv from '../components/footer/Footer'

import Icon1 from '../images/icon1.svg'
import Icon2 from '../images/icon2.svg'
import Icon3 from '../images/icon3.svg'
import Icon4 from '../images/icon4.svg'
import Icon5 from '../images/icon5.svg'

import Arrow from '../images/arrow-1.svg'


function LandingPage() {
  return (
    <div>
      <Header/>

      <Testimonial/>
      
      
      <div className='tool-section'>

        <div className='tool-main-div'>

          <h1 className='tool-main-head'>More tools to grow</h1>
          <p className='tool-main-para'>Enterprise clients benefit from dedicated support with top talent and a robust platform.</p>

          <div className='tool-item-card'>

            <div className='card'>

                <img className='card-icon' src={Icon1} alt="internet icon" />
                <p className='tool_item_card_head'>Domain</p>
                <div className='price-div-card'>
                  <p>₹856.60/mo</p>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
                </div>


            </div>
            <div className='card'>

                <img className='card-icon' src={Icon2} alt="internet icon" />
                <p className='tool_item_card_head'>Hosting</p>
                <div className='price-div-card'>
                  <p>₹856.60/mo</p>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
                </div>


            </div>
            <div className='card'>

                <img className='card-icon' src={Icon3} alt="internet icon" />
                <p className='tool_item_card_head'>Website</p>
                <div className='price-div-card'>
                  <p>₹856.60/mo</p>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
                </div>


            </div>
            <div className='card'>

                <img className='card-icon' src={Icon4} alt="internet icon" />
                <p className='tool_item_card_head'>Professional Email</p>
                <div className='price-div-card'>
                  <p>₹856.60/mo</p>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
                </div>


            </div>

            <div className='card'>

                <img className='card-icon' src={Icon5} alt="internet icon" />
                <p className='tool_item_card_head'>Marketing</p>
                <div className='price-div-card'>
                  <p>₹856.60/mo</p>
                  <img className='arrow' src={Arrow} alt='arrow'></img>
                </div>


            </div>
            
          </div>

        </div>

      </div>

      <MainProduct/>

      <Banner/>

      <FooterDiv/>



    

    
    </div>
  )
}

export default LandingPage
