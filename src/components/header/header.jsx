import React from 'react'
import "./header.css"
import CTA from "./CTA"
import img from "../../assets/seene.jpg"
import Headersocial  from './Headersocial'

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h3>Hello</h3>  
        <h1>I'am Seenevasaraj</h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />
        <div className="img-social-scroll-content">
        < Headersocial/>             
        <img src={img} alt=""></img>      
        <a href="#about"  className="scroll-down">Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header