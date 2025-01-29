import React from 'react'

export default function About() {
  return (

<section className="section about" id="about" aria-label="about">
  <div className="container">
    <figure className="about-banner">
      <div className="img-holder" style={{"--width":"520","--height":"370"}}>
        <img src="./assets/about-banner.jpg" width={520} height={370} loading="lazy" alt="about banner" className="img-cover" />
      </div>
      <img src="./assets/about-shape-3.png" width={722} height={528} loading="lazy" alt className="shape about-shape-3" />
    </figure>
    <div className="about-content">
      <p className="section-subtitle">About Us</p>
      <h2 className="h2 section-title">
        <span className="span">Distant learning</span> for Skill Development
      </h2>
      <p className="section-text">
      Skillbuddy : Building a Supportive Student Community

Empowering Students Through Barter
Our platform addresses the challenges students face in acquiring resources and skills due to financial
limitations. By fostering a hyperlocal barter system, we create opportunities for collaboration and
community-driven growth.we believe in sustainability, resource-sharing, and the power of community. Join us to exchange, grow, and createztogether


      </p>
      <ul className="about-list">
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Expert Trainers</span>
        </li>
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Online Remote Learning</span>
        </li>
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Lifetime Access</span>
        </li>
      </ul>
      <img src="./assets/about-shape-4.svg" width={100} height={100} loading="lazy" alt className="shape about-shape-4" />
    </div>
  </div>
</section>
)
}
