import React from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { db } from "../FirebaseConfig";
import {
  collection,

  addDoc,

} from "firebase/firestore";
export default function PaypalButton({item, pack, setComplet, user, }) {
 
  // async function getAccount(duration, actions) {
  //   const q = query(
  //     collection(db, "accounts"),
  //     where("service", "==", pack),
  //     where("duration", "==", duration),
  //     where("qua", ">", 0),
  //     limit(1)
  //   );
  //   const accounts = await getDocs(q);
  //   console.log(pack + "=> " + duration)
 
  //   if (accounts.empty) {
  //     setError("sory there is no account left");
  //     return actions.reject();
  //   } else {
  //     data={ id: accounts.docs[0].id, ...accounts.docs[0].data() };
  //     return actions.resolve();
  //   }
  
  // }
  async function completeOrder(duration, p) {
    //  console.log(data)
    // if (data.qua > 1) {
    //   await updateDoc(doc(db, "accounts", data.id), {
    //     qua: data.qua - 1,
    //   });
    // }
    const date= new Date()
    await addDoc(collection(db, "orders"), {
      name: user.displayName,
      customerId: user.uid,
      image: user.photoURL,
      service: pack,
      duration,
      email: "",
      password: "",
      price:p,
      hasSeen:false,
      hasComplet:false,
      createdAt: new Date(),
      expiredAt: new Date(date.setDate(date.getDate() + parseInt(item.d) * 30))
    });
    
    setComplet(true);
    // console.log(order);
  }
  return (
    <>
    <PayPalButtons
          style={{ layout: "horizontal" ,shape:  'pill',

          label:  'pay', tagline:false, height:50}}
          
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log(details.purchase_units);
              const price = details.purchase_units[0].amount.value;
              console.log("detailes")
            
              console.log(price);
              completeOrder(item.d, price)
            });
          }}
          
        
        />
        </>
  )
}
