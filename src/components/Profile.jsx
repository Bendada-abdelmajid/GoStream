import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { motion as m , AnimatePresence} from "framer-motion";
import { db } from "../FirebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Account from "./Account";
function Profile({ openProfile, setOpenProfile, user }) {
  const [orders, setOrders] = useState([]);
  const openVarient = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: "0",
      
    },
  
  };

  useEffect(() => {
    const unsubscribeOrders = onSnapshot(
      query(collection(db, "orders"), where("customerId", "==", user.uid), where("hasComplet", "==", true)),
      (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
        setOrders(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsubscribeOrders();
    };
  }, [user.uid]);

  return (
    <AnimatePresence exitBeforeEnter >
      {openProfile && (
      <>
        <div className="overlay" onClick={() => setOpenProfile(false)}></div>
      <m.div
        className="acount-cont space-b "
        variants={openVarient}
        initial="initial"
        animate="animate"
        exit="initial"
      >
        <div className="head">
          <h6>Welcome,</h6>
          <h4>{user.displayName}</h4>
        </div>

        <div className="acounts">
          {orders.map((item) => (
           <Account item={item} key={item.id}/>
          ))}
        </div>
        <div className="logout-btn f-start">
          <AiOutlineLogout /> Logout
        </div>
        <div className="close-btn center" onClick={() => setOpenProfile(false)}>
          <GrClose />
        </div>
      </m.div>
      </>
       )}
    </AnimatePresence >
  );
}

export default Profile;
