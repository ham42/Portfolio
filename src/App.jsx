import Topbar from "./compnonents/topbar/Topbar";
import Intro from "./compnonents/intro/Intro";
import Favorites from "./compnonents/favorites/Favorites";
import Contact from "./compnonents/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./compnonents/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Favorites />
        <Contact />
      </div>
    </div>
  );
}

export default App;
