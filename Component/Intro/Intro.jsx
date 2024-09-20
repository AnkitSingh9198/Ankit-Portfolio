import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'

export default function Intro() {
  return (
    <>
    <section id="intro">

<div className="introContent">
<span className="hello">
    Hello,
</span>
<span className="introText">I'm 
    <span className="introName"> Ankit</span><br/>
    Web Devloper
</span>
<p className="introPara">I am very high skilled web developer having strong knowledge of React</p>
{/* <Link><button className="btn"><img src="../images/verified-user.png" alt="" className="img" /> Hire Me</button></Link> */}
</div>
<img src="../images/profilep.png" alt="" className="bgImg" />
    </section>
    </>
  )
}
