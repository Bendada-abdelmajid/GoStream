import React from "react";
import { google, auth, db } from "../FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { motion as m, AnimatePresence } from "framer-motion";
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
    opacity: 0,
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
export default function Login({ open, setOpen }) {
  async function singIn() {
    try {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
      const result = await signInWithPopup(auth, google);

      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", result.user.uid), {
          username: result.user.displayName,
          email: result.user.email,
          acounts: [],
        });
        console.log("add");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <m.div
          className="popup center"
          variants={variant}
          initial="initial"
          animate="animate"
          exit={"exit"}
        >
          <div className="pg"></div>
          <m.div className="login-box" variants={box}>
            <div className="left">
              <h2>Stream IPTV Effortlessly </h2>
              <p>
                Streamline login and enjoy seamless streaming on your IPTV site
                with Google Login. Link your Google account and save with just
                one click.
              </p>
              <div className="btns f-start">
                <button type="button" onClick={() => setOpen(false)}>
                  later
                </button>
                <button type="button" className="g" onClick={singIn}>
                  Login with google
                </button>
              </div>
            </div>
            <div className="img">
              <img src="/image3.png" alt="" />
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
