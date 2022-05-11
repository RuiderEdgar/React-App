import { useState } from "react";

import React from 'react'

export const DarkLightMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }
    let img;
    if (darkMode) {
        document.getElementById('App').style.background = "rgb(23, 23, 23)";
        document.getElementById('App').style.color = "white";
        img = "https://cdn-icons-png.flaticon.com/512/107/107753.png"
    }else{
        document.getElementById('App').style.background = "white";
        document.getElementById('App').style.color = "black";
        img = "https://cdn-icons.flaticon.com/png/512/4489/premium/4489231.png?token=exp=1652239172~hmac=f4137130b543454a6c5022f708f5d403"
    }
  return (
    <div className="DarkLightMode">
      <button type="button" onClick={handleClick}>
          {darkMode ? <img src="https://cdn-icons-png.flaticon.com/512/107/107753.png"></img> 
          : <img src="https://cdn-icons.flaticon.com/png/512/4489/premium/4489231.png?token=exp=1652239172~hmac=f4137130b543454a6c5022f708f5d403" alt="dark light mode" />}
        {darkMode ? 'Dark Mode' : 'Light Mode'} 
      </button>
    </div>
  )
}

export default DarkLightMode;
//Otra manera de colocar la funcion
//<button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>