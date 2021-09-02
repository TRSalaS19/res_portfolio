import React, { useState } from "react";
import "./style/main.scss";
import Topbar from "./components/Topbar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Intro from "./components/Intro";
import Menu from "./components/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
