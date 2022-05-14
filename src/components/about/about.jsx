import React from 'react';
import "./about.css";
import Lottie from "../Lottie"
import {AiOutlineUser} from "react-icons/ai"
import {GiAchievement} from "react-icons/gi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
function About(){

    return(
      <section id="about">
        <h5>Get To Know </h5>
        <h2>About Me</h2>

        <div className="about-container">
          <div className="lottie-img">
            <Lottie  />
          </div>     
          <div className="about-content">
            <div className="about-cards">
              <article className="card-content">
                <div className="icon"><AiOutlineUser /></div>
                <h3>Experience</h3>
                <small>1+Year</small>
              </article>
              <article className="card-content">
              <div className="icon"><GiAchievement/></div>
                <h3>Achievements</h3>
                <small>Best employee</small>
              </article>
              <article className="card-content">
                <div className="icon"><AiOutlineFundProjectionScreen/></div>
                <h3>Projects</h3>
                <small>4+project</small>
              </article>
            </div>
            <p className="about-me">The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
                Absolute length units are not recommended for use on screen, because screen sizes vary so much. However,
                 they can be used if the output medium is known, such as for print layout.</p>
            <a href="#contact"  className="btn btn-primary " >
         Let's talk'</a>
          </div>
        </div>
      
       </section>
    )
}

export default About;