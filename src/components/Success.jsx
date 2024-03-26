import React from "react";
import {motion as m, AnimatePresence} from "framer-motion"
export default function Success({complet, setComplet}) {
   
  const variant = {
    initial: {
      opacity: 0,
    
    },
    animate: {
      opacity: 1,
 
      transition: {
        delay: 0.2,
        staggerChildren: 0.5,
        when: "beforeChildren",
        mis: 0.4,
        damping: 8,
        type: "spring",
      },
    },
    exit: {
     opacity:0,
      transition: { ease: "easeInOut" },
    },
  };
  const box = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    animate: {
      opacity: 1,
      y: "0",
    },
    exit: {
      y: "100vh",
    },
  };
  return (
    <AnimatePresence exitBeforeEnter >
   {complet && <m.div className="popup center"  variants={variant}
        initial="initial"
        animate="animate"
        exit={"exit"}>
     <div className="pg"></div>
      <div className="success" variants={box}>
        
      
        <h2 >Tanck you for chosing us </h2> 
       <h3> will send you your email as soon as we can
        </h3>
      
        
        <button type="button" onClick={()=>setComplet(null)}>Done</button>
      </div>
    </m.div> } 
    </AnimatePresence>
  );
}
