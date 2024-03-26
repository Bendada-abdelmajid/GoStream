import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import { motion , AnimatePresence} from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: { type: "spring", stiffness: 120 },
  },
  exit:{
    y:"100vh",
    transition:{ease:"easeInOut"}
  }
};
const chiled = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: {delay:0.5, type: "spring", stiffness: 120 },
  },
  exit:{
    y:"-100vh",
    transition:{ease:"easeInOut"}
  }
};

function Contact() {
  const [sent, setSent]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
   console.log(e.target.email)
    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, e.target, process.env.REACT_APP_EMAIL_CLIENT_ID)
      .then((result) => {
          console.log(result);
          console.log(result.text);
          if(result.text === "OK"){
            setSent(true)
          }
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <motion.section class="contact"
    variants={variant}
    initial="initial"
    animate="animate"
    exit={"exit"}
    > 
     <AnimatePresence exitBeforeEnter >
    {sent ?
      <motion.div className='sent center' variants={chiled}>
        <img src="/pngegg.png" alt="sent"/>
        <p>we recieved your message, we will reply soon !</p>
      </motion.div>
      :
      <motion.form onSubmit={sendEmail} variants={chiled}>
      <h3>Get in Touch</h3>
        <div class="center">
          <div class="input-container outer-shadow hover-in-shadow">
            <input type="text" name="name" placeholder="Name" class="input"/>
          </div>
          <div class="input-container outer-shadow hover-in-shadow">
            <input type="email" name="user_email" placeholder="Email" class="input" />
          </div>
        </div>
        <div class="input-container outer-shadow hover-in-shadow">
            <input type="text" name="subject" placeholder="Subject" class="input"/>
          </div>
        <div class="text-container outer-shadow hover-in-shadow">
            <textarea name="message"  placeholder="Message"></textarea>
        </div>
  
        <div class="btn outer-shadow hover-in-shadow">
          <input type="submit" value="Send Message"/>
        </div>
      
    </motion.form>}
    </AnimatePresence>
  </motion.section>
 
  <p className='marck c'>Contact Us</p>
  </>
  )
}

export default Contact