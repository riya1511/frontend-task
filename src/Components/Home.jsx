import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Section1 from '../Components/Section1/Section1';
import Section2 from '../Components/Section2/Section2';
import Sidebar from './Sidebar/Sidebar';

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()  => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='home'>
    <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Home