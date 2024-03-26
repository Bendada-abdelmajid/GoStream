import React, { useState } from "react";

import { SlSocialFacebook } from "react-icons/sl";

import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const variant = {
  initial: {
    y: -90,
  },
  animate: {
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

function Header({ user, setOpenProfile , setOpenLogin}) {
  const [show, setShow] = useState(false);
  return (
    <motion.header variants={variant} initial="initial" animate="animate" className={`space-b container ${show && "showNav"}`}>
      <div className="logo f-start">
      <span>G</span>oStream
      </div>
      <nav >
        <div className="links center">
          <NavLink to={"/"} className="center" onClick={() => setShow(false)}>
            Home
          </NavLink>
          <NavLink
            to={"/packages"}
            className="center"
            onClick={() => setShow(false)}
          >
            Packages
          </NavLink>

          <NavLink
            to={"/about-us"}
            className="center"
            onClick={() => setShow(false)}
          >
            About-us
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className="center"
            onClick={() => setShow(false)}
          >
            Contact-us
          </NavLink>
        </div>
        <div className="social-media center">
          <Link
            to={"/about-us"}
            className="center"
            onClick={() => setShow(false)}
          >
            <SlSocialFacebook />
          </Link>
          <Link
            to={"/about-us"}
            className="center"
            onClick={() => setShow(false)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z" />
            </svg>
          </Link>
          
        </div>
      </nav>
      <div variants={variant} initial="initial" animate="animate" className="f-end">
      {user ? (
           
           <div className="c-img" onClick={() => setOpenProfile(true)} >
             <img src={user?.photoURL} alt={user.displayName[0]} className="center"/>
          </div>
         ) : (
           <button className="login-btn" onClick={() => setOpenLogin(true)}>
             Login
           </button>
         )}
      <div className="nav-btn center" onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
      </div>
      </div>
    </motion.header>
  );
}

export default Header;
