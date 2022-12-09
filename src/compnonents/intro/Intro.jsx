import { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect'
import "./intro.scss";

export default function Intro() {
  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="Profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>M Hammad Raza</h1>
          <h3><pre>MERN Stack </pre><Typewriter options={{strings: ['Developer'], skipAddStyles:true, autoStart: true, loop: true,}}/></h3>
        </div>
      </div>
    </div>
  )
}
