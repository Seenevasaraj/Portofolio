import React from 'react'
import "./contact.css"
import {MdMailOutline} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import{ useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_15z4u1m","template_5gmv0rt", form.current, 'CJf3sO0Tm7BzMlm8N')
    e.target.reset()
  };


  return (
    <section className ="" id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className = "container contact-container">
        <div className = "contact-option">
          <article className="option">
            <MdMailOutline className="contact-icon" />
            <h4>Email</h4>
            <h5>seene2016rsp@gmail.com</h5>
            <a href="mailto:seene2016rsp@gmail.com">Send a message</a>
          </article>
          <article className="option">
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsappp</h4>
            <h5>7418734895</h5>
            <a href="https://api.whatsapp.com/send?phone=+917418734895" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} className="form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="txtarea" rows="7" placeholder="Enter your comments" required ></textarea>
          <button type="submit" className="btn" >submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact