import './App.css';
import { Header } from './components/Header';
import {Characters} from './components/Characters';
import {DarkLightMode} from './components/DarkLightMode';
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
    const handleClick = () => {
      setDarkMode(!darkMode);
    }

  return (
    <div id='App' className="App">
      <Header/>
      <DarkLightMode/>
      <h1>Hola Mundo!</h1>
      <Characters/>
      
    </div>
  );
}

export default App;
