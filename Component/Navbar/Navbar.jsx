import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll'

export default function Navbar() {
  const PDFFILE='http://localhost:5173/Ankit Singh - Resume.pdf'
  function downloadFile(url){
const fileName=url.split('/').pop();
const aTag=document.createElement('a');
aTag.href=url;
aTag.setAttribute('download',fileName);
document.body.appendChild(aTag);
aTag.click();
aTag.remove();
  }
  return (
    <div>
        <nav className="navbar">
            <img className ='logo' src="../images/web.png" alt="" />
            <div className="desktopMenu">
                <Link className='deskTopMenuItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='deskTopMenuItem'>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='deskTopMenuItem'>Projects</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='deskTopMenuItem'>Contact</Link>
            </div>
            <button className="desktopMenuButton"onClick={()=>{downloadFile(PDFFILE)}}>
                {/* <img src="" alt="" className="desktopMenuImage" /> Download Resume */}
                Download Resume
            </button>
        </nav>
    </div>
  )
}
