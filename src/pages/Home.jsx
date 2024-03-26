import React from 'react'
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {delay:0.5,duration:1},
  },
  exit:{
  
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
};
function Home() {
  return (
    <motion.section className='hero'
    variants={variant}
    initial="initial"
    animate="animate"
    exit={"exit"}>
      {/* <p>Unlimited access to the best entertainment, all in one place.</p> */}
      <h1 >Stream Your Favorite Shows and  Movies and Musice with Glory Mix</h1>
      <Link to={"/packages"}>
      <button>Start Now</button>
      </Link>
     
    </motion.section>
  )
}

export default Home