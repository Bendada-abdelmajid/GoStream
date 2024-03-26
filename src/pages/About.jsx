import React from "react";
import { motion } from "framer-motion";

import {  BsPause } from "react-icons/bs";
import { useState } from "react";
const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const playVar = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};
function About() {
  const [play, setPlay] = useState("");
 
  return (
    <motion.div
      className="about"
      variants={variant}
      initial="initial"
      animate="animate"
      exit={"exit"}
    >
      <div className={`scroll-text ${play}`}>
        <h1>About us</h1>
        <p onClick={() => setPlay(play === "play" ? "pause" : "play")}>
          At Glory Mix, we're dedicated to providing our customers with the best
          streaming experience possible. We understand that traditional cable
          and satellite TV can be restrictive and expensive, which is why we've
          created a service that offers the flexibility and affordability that
          modern viewers demand. With ipTV, you can stream all of your favorite
          shows and movies in HD quality, on-demand, and on any device. Our
          service is designed to give you the freedom to watch what you want,
          when you want, without any of the hassles of traditional TV. We offer
          a wide range of channels, including all of the most popular networks,
          as well as many regional and language-specific channels. Our plans and
          pricing options are designed to suit any budget and lifestyle, so you
          can choose the perfect package for your needs. We're constantly
          working to improve our service, and we're always listening to our
          customers to find out what they want and need. If you ever have any
          questions or feedback, our customer support team is always here to
          help. Thank you for choosing ipTV for your streaming needs. We look
          forward to providing you with endless entertainment at your
          fingertips.
        </p>
       
      </div>
      {play === "play" && (
        <motion.div variants={playVar} className="center play-btn">
          <BsPause />
        </motion.div>
      )}
    </motion.div>
  );
}

export default About;
