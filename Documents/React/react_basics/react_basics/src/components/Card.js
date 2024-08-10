import React from 'react'
import Footer from './Footer'
import profileImage from './images/profileImage.jpg'
import emailImage from './images/Button.jpg'
import linkedIn from './images/Button (1).jpg'


function Card() {
  return (
    <main className='card'>
          <div className='card-content'>
            <img src={profileImage} alt="profile-image" className='card-image' />
            <div className="profile-text">
              <h1 className='profile-name'>Laura Smith</h1>
              <h4 className='profile-role'>Frontend Developer</h4>
              <p className='profile-website'>laurasmith.website</p>
              <div className="socials">
                <img src={emailImage} alt=""  className='buttons'/>
                <img src={linkedIn} alt="" id='linkedIn'  className='buttons'/>
              </div>
              <div className="card-info">
                <div className="about">
                  <h2>About</h2>
                  <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="interest">
                  <h2>Interests</h2>
                  <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
    </main>
  )
}

export default Card