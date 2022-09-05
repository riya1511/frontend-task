import React from 'react'
import img from '../../images/founder.jpg'
import '../Section4/Section4.css'

function Section4() {
  return (
    <div className='section4'>
        {/* <div className='founder_pic'> */}
            <img src={img} alt='founder' />
        {/* </div> */}
        <div className='text'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui quia explicabo, facilis, ad sed ipsum mollitia</p>
            <p className='italic'>-Co-founders</p>
        </div>
    </div>
  )
}

export default Section4