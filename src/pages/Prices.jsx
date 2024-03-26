import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { useState } from "react";

import Success from "../components/Success";
import PaypalButton from "../components/PaypalButton";



const variant = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      delay: 0,
      staggerChildren: 0.2,
      when: "beforeChildren",
      mis: 0.4,
      damping: 8,
      type: "spring",
    },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
};
const Vcard = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  animate: {
    opacity: 1,
    x: "0",
  },
  exit: {
    x: "100vw",
  },
};
const back = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: "0",
    transition: { type: "spring", stiffness: 120 },
  },
};
function Prices({ pack, data, setSerPoss, user , setOpenLogin}) {
  const navigate = useNavigate();
  const [complet, setComplet] = useState(false);
 
  const [selectId, setSelectedId] = useState(null);
  useEffect(() => {
    if (!pack) {
      navigate("/packages");
    }
  }, [navigate, pack]);
  if (!pack) return null;
  return (
    <>
      <motion.section
        className=" prices"
        variants={variant}
        initial="initial"
        animate="animate"
        exit={"exit"}
      >
        <h1 className="f-start heading">
          <Link to={"/packages"}>
            <button
              className="back center"
              onClick={() => {
                setSerPoss("-100vw");
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"></path>
              </svg>
            </button>
          </Link>
          <span>step 2:</span>Select your plan
        </h1>
        <div className="cards center">
          
          {data[pack].offerse.map((item, index) => (
            <motion.div
              variants={Vcard}
              className={
                selectId !== null && selectId === index + 1 ? "selcted" : ""
              }
              key={index}
            >
              <Card item={item} index={index} setSelectedId={setSelectedId} />
            </motion.div>
          ))}
        </div>

        {selectId && (
         
          <motion.div variants={back} className="p-btn">
             {user ? 
            <PaypalButton
              item={data[pack].offerse[selectId - 1]}
              pack={pack}
              setComplet={setComplet}
              user={user}
            
            />
            : <div className="login-btn"  onClick={() => setOpenLogin(true)}>Login </div>}
          </motion.div>
          
        )}
      </motion.section>
      <p className="marck">{pack}</p>
      <Success complet={complet} setComplet={setComplet} />
     
    </>
  );
}

export default Prices;
