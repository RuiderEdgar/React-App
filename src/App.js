import './App.css';
import { Header } from './components/Header';
import {Characters} from './components/Characters';
import {DarkLightMode} from './components/DarkLightMode';
import { useState } from "react";
import Genshin from './components/Genshin';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "darkMode" : "lightMode";

  return (
    <div id='App' className={"App " + bg}>
      <header>
        <Header/>
        <DarkLightMode
          darkMode={darkMode}
          onClick={() => setDarkMode(!darkMode)}>
        </DarkLightMode>
      </header>
      <hr />
      <main>
        <Genshin/>
      </main>
      
      
    </div>
  );
}

export default App;