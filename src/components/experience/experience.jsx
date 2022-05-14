import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>    
      <h2>My Experience</h2>    
      <div className="container experience-container">
        <div className="front-end">
          <h2>Frontend Skill</h2>
          <div className="experience-content">
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>css</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-article">
             <BsPatchCheckFill className="patch-icon"/>
             <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>

        </div>
        <div className="back-end">
        <h2>Backend Skill</h2>
        <div className="experience-content">
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>django</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-article">
             <BsPatchCheckFill className="patch-icon"/>
             <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-article">
              <BsPatchCheckFill className="patch-icon"/>
              <div>
              <h4>SQL DB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience