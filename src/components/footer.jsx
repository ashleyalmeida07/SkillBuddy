import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" style={{}}>
    <div className="footer-top section">
      <div className="container grid-list">
        <div className="footer-brand">
          <a href="#" className="logo">
            <img src="./assets/logo.jpg" width={162} height={50} alt="Skill Buddy logo" />
          </a>
           
          <div className="wrapper">
            <span className="span">Add:</span>
            <address className="address">Mumbai</address>
          </div>
          <div className="wrapper">
            <span className="span">Call:</span>
            <a href="tel:+011234567890" className="footer-link">+91 9145147812</a>
          </div>
          <div className="wrapper">
            <span className="span">Email:</span>
            <a href="mailto:info@SkillBuddy.com" className="footer-link">info@SkillBuddy.com</a>
          </div>
        </div>
        <ul className="footer-list">
        <li>
          <p className="footer-list-title">Company</p>
        </li>
        <li>
          <a href="#" className="footer-link">About</a>
        </li>
        <li>
          <a href="#" className="footer-link">Courses</a>
        </li>
        <li>
          <a href="#" className="footer-link">Press</a>
        </li>
        <li>
          <a href="#" className="footer-link">Blog</a>
        </li>
        <li>
          <a href="#" className="footer-link">Affiliate Program</a>
        </li>
        <li>
          <a href="#" className="footer-link">Partnerships</a>
        </li>
      </ul>
     

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Support</p>
          </li>
          <li>
            <a href="#" className="footer-link">Guidelines</a>
          </li>
          <li>
          <button
  className="btn has-before" id="contact-us"
  onClick={() => (window.location.href = "/contact.html")}
>
  <span className="span">Contact US</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>          </li>
        </ul>
  
      
        <div className="footer-list">        
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          Copyright 2025 All Rights Reserved by <a href="#" className="copyright-link">SkillBuddy</a>
        </p>
      </div>
    </div>
  </footer>
  )
}
