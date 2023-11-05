import styles from "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import { useRef, useEffect } from "react";

function App() {
  const homeRef = useRef();
  const portfolioRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();

  function goHome() {
    window.scrollTo(0, homeRef.current.offsetTop);
  }
  function goAbout() {
    window.scrollTo(0, aboutRef.current.offsetTop);
  }
  function goSkill() {
    window.scrollTo(0, skillRef.current.offsetTop);
  }
  function goPortfolio() {
    window.scrollTo(0, portfolioRef.current.offsetTop);
  }
  function goContact() {
    //working but not smooth
    //window.scrollTo(0, contactRef.current.offsetTop);
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: contactRef.current.offsetTop,
    });
  }, [contactRef]);

  return (
    <div>
      <div
        style={{
          height: "10%",
          position: "sticky",
          top: 0,
        }}
      >
        <ul className="header">
          <li>
            <p onClick={goHome}>Home</p>
          </li>
          <li>
            <p onClick={goPortfolio}>Portfolio</p>
          </li>
          <li>
            <p onClick={goSkill}>Skill</p>
          </li>
          <li>
            <p onClick={goAbout}>About</p>
          </li>
          <li>
            <p onClick={goContact}>Contact</p>
          </li>
        </ul>
        <div className="content"></div>
      </div>
      <div
        style={{
          height: "90%",
          //overflow: "scroll",
        }}
      >
        <Home ref={homeRef} />
        <Portfolio ref={portfolioRef} />
        <Skill ref={skillRef} />
        <About ref={aboutRef} />
        <Contacts myRef={contactRef} />
      </div>
    </div>
  );
}

export default App;
