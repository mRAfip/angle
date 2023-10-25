import React from 'react'

import TestimonialVideo from '../images/video.mp4'

import './testimonial.css'

function Testimonial() {
  return (
    <div className="full-page-video">
      <video className="video-background" autoPlay muted loop>
        <source src={TestimonialVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Testimonial
