import React, {useState} from 'react'
import CopyToClipboard from "react-copy-to-clipboard";
export default function Account({item}) {
    const [copied, setCopied] = useState(null);
    const handleCopy = (c) => {
        setCopied(c);
        setTimeout(() => setCopied(null), 3000);
      };
      function dateDiffInDays(a, b) {
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
       
        return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
      }
      
      const date1 = new Date(item.createdAt.toDate());
      const date2 = new Date(item.expiredAt.toDate());
    
  return (
    <div className="acount">
    <div className="space-b">
      <h4>{item.service}</h4>
      <h5>
        {dateDiffInDays(date1, date2)} <sup>days Left</sup>
      </h5>
    </div>

    <div className="two-column">
      <h5>duration</h5>
      <p> {item.duration === "1"
            ? "one Month"
            : item.duration > 12
            ? item.duration + " Months"
            : item.duration === "12"?  "one year" : parseInt(item.duration)/12  + " year" }</p>
      <h5>orderd</h5>
      <p>{item.createdAt.toDate().toLocaleDateString()}</p>
      <h5>Email</h5>
      <div className="space-b span">
      <p>{item.email}</p>
      <CopyToClipboard text={item.email} className="copy-btn center"
            onCopy={()=>handleCopy("email")}>
                {copied=== "email"? 
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path></svg>:
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>}
            </CopyToClipboard>
      </div>
   
      
     
      <h5>password</h5>
      <div className="space-b span">
      <p >{item.password}</p>
      <CopyToClipboard text={item.password} className="copy-btn center"
            onCopy={()=>handleCopy("password")}>
                {copied=== "password" ? 
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"></path></svg>:
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>}
            </CopyToClipboard>
      </div>
      
    </div>
  </div>
  )
}
