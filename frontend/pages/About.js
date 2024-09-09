import React from 'react'
import abpic from "../assets/abpic.jpg"
import "../Styles/About.css"
function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${abpic})` }}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p> LearnEasy is a cutting-edge e-learning platform designed to transform the way people access and engage with educational content. Our mission is to make high-quality education accessible, affordable, and flexible for learners worldwide. Whether you are a student, a professional seeking to enhance your skills, or a lifelong learner passionate about new knowledge, LearnEasy offers a diverse array of courses and resources to meet your needs.</p>
        </div>

    </div>
  )
}

export default About