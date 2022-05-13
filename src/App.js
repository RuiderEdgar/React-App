import './App.css';
import { Header } from './components/Header';
import {Characters} from './components/Characters';
import {DarkLightMode} from './components/DarkLightMode';
import { useState } from "react";
import Genshin from './components/Genshin';
import ThemeContext from './context/ThemeContext';


function App() {
  const [theme, updateTheme] = useState("darkMode");
  

  /*---Ya no se usa esta parte del codigo--- */
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "darkMode" : "lightMode";
/*----------------------------------------- */

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <html className={theme}>
      <div id='App' className={"App " + theme}>
        <header>
          <Header/>
          <DarkLightMode/>
        </header>
        <hr />
        <main>
          <Genshin/>
        </main>
      </div>
      </html>
    </ThemeContext.Provider>
  );
}

export default App;