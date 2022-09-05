import React from 'react';
import { motion } from 'framer-motion';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import "../Section1/Section1.css";

function Section1() {

    // const [animate, setAnimate] = useState(false);
    // const [lastYpos, setLastYpos] = useState(0);

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const yPos = window.scrollY;
    //         const isScrollingUp = yPos < lastYpos;

    //         setAnimate(isScrollingUp);
    //         setLastYpos(yPos);
    //     }
      
    //     window.addEventListener("scroll", handleScroll, false);

    //     return() => {
    //         window.removeEventListener("scroll", handleScroll, false);
    //     }
    // }, [lastYpos])
    

  return (
    <div className='section1'>
        <div className="left_float">
            <motion.div
                animate={{y: [0, 30, 0]}}
                transition={{repeat: Infinity, duration: 5}}
                className='small-icon'
            >
                <img src={icon1} alt='icon' />
            </motion.div>

            <motion.div
                animate={{y: [0, 30, 0]}}
                transition={{repeat: Infinity, duration: 5}}
                className='large-icon'
            >
                <img src={icon2} alt='icon' />
            </motion.div>
        </div>

        <div className='text_block'>
            <h1>10% returns.
            Now yours.</h1>
            <h3>Invest and grow your stablecoins.</h3>
            <button>Invest Now</button>
        </div>
        
        <div className="right_float">
            <motion.div
                animate={{y: [0, 30, 0]}}
                transition={{repeat: Infinity, duration: 5}}
                className='small-icon'
            >
                <img src={icon3} alt='icon' />
            </motion.div>

            <motion.div
                animate={{y: [0, 30, 0]}}
                transition={{repeat: Infinity, duration: 5}}
                className='large-icon'
            >
                <img src={icon4} alt='icon' />
            </motion.div>
        </div>
    </div>
  )
}

export default Section1