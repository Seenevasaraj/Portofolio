import React from 'react'
import "./service.css"
import{MdWorkOutline} from "react-icons/md"


const Service = () => {
  const [windowwidth,windowstate]=React.useState(window.innerWidth)
  const [laptop,setscreen]=React.useState("")
  
  function windowTracker(){
    windowstate(window.innerWidth)
  }

  React.useEffect(()=>{
      window.addEventListener("resize",windowTracker)
      if(windowwidth<=650){
          setscreen(false)
      }else{
          setscreen(true)
      }
  },[windowwidth])

 


  return (
    <section id="service">
        <h2>Services</h2>
        <div className='container service-container'>
            <article className="service-content">
                <div className='article-title'>
                   <MdWorkOutline className='work-icon'/>
                    <div>
                    <h3>Digiapp Studio</h3>
                    <small className='text-light'>Apr 2021 - Oct 21</small>
                    </div>
                </div>
                <div className='article-body'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora nostrum laudantium sint distinctio beatae. Ex tempora tempore amet quae voluptatem optio. Sunt, reprehenderit facilis!</p>
                 { laptop &&  <div className="project">
                        <h3>Projects</h3>
                        <ul>
                            <li>Construction app
                                <span className="text-light">
                                     (It helps engineer to check construction things availabilty and order if needed through app)
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                    }
                </div>

            </article>
            <article className="service-content">
                <div className='article-title'>
                   <MdWorkOutline className='work-icon'/>
                    <div>
                    <h3>Luxoft</h3>
                    <small className='text-light'>Dec 2021 - current</small>
                    </div>
                </div>
                <div className='article-body'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora nostrum laudantium sint distinctio beatae. Ex tempora tempore amet quae voluptatem optio. Sunt, reprehenderit facilis!</p>
                  { laptop && <div className="project">
                        <h3>Projects</h3>
                        <ul>
                            <li>Management app
                                <span className="text-light">
                                     (It helps Manager to check his team members involvement in project and
                                    monitor whether employee is overloaded or not)
                                </span>
                            </li>
                            <li>Datamapping tool
                                <span className="text-light">
                                     (It helps Manager to check his team members involvement in project and
                                     whether employee is overloaded or not)
                                </span>
                            </li>
                            <li>Automation Framework
                                <span className="text-light">
                                     (It helps Manager to check his team members involvement in project and
                                     whether employee is overloaded or not)
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                    }
                </div>

            </article>

        </div>
    </section>
  )
}

export default Service