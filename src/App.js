import React, { useState, useEffect,} from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Routes, Route , useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./FirebaseConfig";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Prices from "./pages/Prices";

import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const location = useLocation();
  const [serPess, setSerPoss]= useState("100vw")
  const [data, setData] = useState([]);
  const [packages, setPackages] = useState([]);
  const [pack, setPack] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

   useEffect(() => {
    try {
      const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
      const unsubscribe = onSnapshot(
          collection(db, "prices"),
          (querySnapshot) => {
            const list = {};
            querySnapshot.forEach((doc) => {
              const d = doc.data();
              
                list[d.service]= {id: doc.id, ...doc.data() }
              
    
            });
    
            setPackages(Object.keys(list))
            console.log(list)
    
            setData(list)
          },
          (error) => {
            console.log(error);
          }
        );
        
      return () => {
        unregisterAuthObserver();
        unsubscribe();
      };
    } catch (error) {
      alert("no connection");
    }
  }, [auth]);

  return (
    <div className="container App">
      <PayPalScriptProvider
        options={{ "client-id": process.env.REACT_APP_CLIENT
        }}
      >
        
        
         <div className="hero-img">
          <img src="/hero-img.png"role="presentation" alt="hero " />
        </div>
       
        <Header user={user} setOpenProfile={setOpenProfile} setOpenLogin={setOpenLogin}/>
        <AnimatePresence mode="wait" >
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/packages"
            element={
              <Services packages={packages} setPack={setPack} pack={pack} serPess={serPess}  />
            }
          />
          <Route path="/prices" element={<Prices pack={pack} data={data} setSerPoss={setSerPoss} user={user} setOpenLogin={setOpenLogin} />} />
        </Routes>

        </AnimatePresence>
        {user && 
        <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} user={user}/>}
        {!user && <Login open={openLogin} setOpen={setOpenLogin}/> }
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
