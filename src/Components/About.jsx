import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'

function About() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()  => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='about'>
        <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>
  )
}

export default About