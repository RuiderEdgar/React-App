import { useState } from "react";
import nightMode from "../assets/icons/nightMode.png";
import lightMode from "../assets/icons/lightMode.png"
import React from 'react'

export const DarkLightMode = (props) => {
    
  return (
    <div className="DarkLightMode">
        <button type="button" className="dark-toggle" onClick={()=>props.onClick()}>
        {props.darkMode 
          ? <img className="iconDarkLightMode" src={lightMode}></img> 
          : <img className="iconDarkLightMode" src={nightMode} />
        }
        </button>
    </div>
  )
}

export default DarkLightMode;
//Otra manera de colocar la funcion
//<button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>

/*
{darkMode 
    ? <img className="iconDarkLightMode" src="../assets/icons/night-mode.png" alt="icono dark mode"></img> 
    : <img className="iconDarkLightMode" src="../assets/icons/light-mode.png" alt="icono light mode" />
  }{props.darkMode ? "Light Mode" : "Dark Mode"}
  */