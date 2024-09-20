import React from 'react'
import './projects.css'
export default function Projects() {
  return (
    <section id='works'>
<h2 className="worksTitle">My Projects</h2>

<span className="workDesc">
The project description is part of the larger 
project proposal. While the project 
description covers 
a lot of ground, it’s really more of a 
high-level view of the project. 
    </span>  
    <div className="worksImages">
        <img src="./images/port1.webp" alt="" className='worksImage'/>
        <img src="./images/port2.jpg" alt="" className='worksImage'/>
        <img src="./images/port3.webp" alt="" className='worksImage'/>
        <img src="./images/port4.jpg" alt="" className='worksImage'/>
        <img src="./images/port5.jpg" alt="" className='worksImage'/>
        <img src="./images/port6.png" alt="" className='worksImage'/>
        
    </div>

      </section>
  )
}
