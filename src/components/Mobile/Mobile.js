import React from 'react';
import './Mobile.css'
import { useState } from 'react';
const Mobile = () => {
  let [battery, setBattery] = useState(100);
  const batteryDown = () => {

    if (battery <= 0) {
      return battery;
    }
    else {
          setBattery(battery - 10); 
    }
  };
  return (
    <div className='mobile'>
      <h1>Mobile battery action</h1>
      <h4>Battery Charge: {battery}</h4>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  );
};

 
export default Mobile;
