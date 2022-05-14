import React from 'react'
import "./nav.css"
import {AiFillHome} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {MdPermContactCalendar} from "react-icons/md"
const Nav = () => {
  const[state,Setstate]=React.useState("#home")

  return (
    <nav>
      <a href="#home" onClick={() => (Setstate("#home"))}  className={state === "#home" ? "active" :""}><AiFillHome /></a>
      <a href="#about" onClick={() => (Setstate("#about"))}  className={state === "#about" ? "active" :""}><FaUserAlt /></a>
      <a href="#experience" onClick={() => (Setstate("#experience"))}  className={state === "#experience" ? "active" :""}><BiBook /></a>
      <a href="#service" onClick={() => (Setstate("#service"))}  className={state === "#service" ? "active" :""}><RiServiceLine /></a>
      <a href="#contact"  onClick={() => (Setstate("#contact"))}  className={state === "#contact" ? "active" :""} ><MdPermContactCalendar /></a>


    </nav>
  )
}

export default Nav