import React from 'react'
import twitter from './images/Twitter Icon.png'
import facebook from './images/Facebook Icon.jpg'
import instagram from './images/Instagram Icon.jpg'
import github from './images/GitHub Icon.jpg'

function Footer() {
  return (
    <div className='footer'>
        <img className='icon' src={twitter} alt="twitter-icon" />
        <img className='icon' src={facebook} alt="facebook-icon" />
        <img className='icon' src={instagram} alt="instagram-icon" />
        <img className='icon' src={github} alt="github-icon" />
    </div>
  )
}

export default Footer