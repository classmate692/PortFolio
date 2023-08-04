import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div >
       <div className='headercontainer'>
        <div className='container'>
        <div className='subcontainer'><a href="#" className="navline">HOME</a></div>
        <div className='subcontainer'><a href="#Service" className="navline">SERVICES</a></div>
        <div className='subcontainer'><a href="#Skill" className="navline">SKILLS</a></div>
        <div className='subcontainer'><a href="#Project" className="navline">PORTFOLIO</a></div>
        <div className='subcontainer'><a href="#Contact" className="navline">CONTACT</a></div>
        </div>
        <div className='btncontainer'>
        <div ><button className='headerbtn'><a href="#Contact"  className="navbtn">CONTACT NOW</a></button></div>
        </div>
       </div>
    </div>
  )
}
