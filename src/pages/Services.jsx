import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Services({ packages, setPack, pack , serPess}) {
  const variant = {
    initial: {
      opacity: 0,
      x: serPess,
    },
    animate: {
      opacity: 1,
      x: "0",
      transition: { delay:0.5,type: "spring", stiffness: 120 },
    },
    exit:{
      x:"-100vw",
      transition:{ease:"easeInOut"}
    }
  };
  return (
    <motion.section className="packages"
    variants={variant}
    initial="initial"
    animate="animate"
    exit={"exit"}>
      <h1 className="f-start heading">
        <span>step 1:</span> Chose your package{" "}
      </h1>
      <ul>
        {packages.map((item, index) => (
          <motion.li
            key={index}
            onClick={() => setPack(item)}
            className={`f-start ${pack === item ? "active" : ""}`}
            whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {pack === item && (
              <motion.svg
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 17 17"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g></g>
                <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
              </motion.svg>
            )}
            {item}
          </motion.li>
        ))}
      </ul>
      {pack && (
        <motion.div
          className="next-btn"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to={"/prices"}>
            <button
            >Next</button>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
}

export default Services;
