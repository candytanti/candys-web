import { useRef } from "react";
import './App.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Popup from './components/Popup';
import Popup2 from './components/Popup2';
import Popup3 from './components/Popup3';
import { useState } from "react";

import React from 'react';
import { useSpring, animated } from 'react-spring';


function App() {
  const home = useRef(null);
  const about = useRef(null);
  const experiences = useRef(null);
  const connect = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };


  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


  return (
    <div className="App">
      <div className="navbar">
        <ul>
            <li onClick = {() => scrollToSection(home)} className = "link"> home </li>
            <li onClick = {() => scrollToSection(about)} className = "link"> about </li>
            <li onClick = {() => scrollToSection(experiences)} className = "link"> projects </li>
        </ul>
      <div>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <a onClick = {() => scrollToSection(connect)} className="contact"> 
            Contact me
          </a>
        </div>
      </div>
              


      <div className="main">

        <div ref={home} className="home">
          <h3> Hi, I'm Candy! </h3>
          
          <p> (Nayada Tantichirasakul) </p>
          <p> I'm an undergraduate student studying Computer Science and Data Science at Northwestern University. </p>
        </div>

        <div ref={about} className="about">
            <div> 
              <h3>about</h3>
              <p> 
              Hello, my name is Candy Tantichirasakul. I am an undergraduate student studying Computer Science at Northwestern University. I am also pursuing a minor in Data Science and certificate in Leadership. I am originally from Bangkok, Thailand but travelled to the United States in sophomore year to continue my studies at Phillips Exeter Academy.   
              </p>
              <p>
              I am currently interested in how Computer Science can be used for social good, especially in the realm of education. I believe that education is the basis to understanding ourselves, our society and, thus, our future. I want to create more opportunities for other students to access the resources they need to discover their own passions and I believe that technology is the key to doing that.
              </p>
            </div>
            <div className="education">
              <img src="pea.png" alt="Phillips Exeter Academy" />
              <img src="nu.png" alt="Northwestern University" />
            </div>
        </div>
        <div className="favlang">
            <h4> my favorite programming languages: </h4>
            <div className="languages">
              <img src="./languages/python.png" alt="python" />
              <img src="./languages/c++.png" alt="c plus plus" />
              <img src="./languages/html.png" alt="html" />
              <img src="./languages/css.png" alt="css" />
              <img src="./languages/javascript.png" alt="javascript" />
              <img src="./languages/sql.png" alt="sql" />
            </div>
        </div>

        <div ref={experiences} className="experiences">
          <h3> my projects </h3>
          <div className = "horizontal">
            <div className="project" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => setButtonPopup(true)}>
              <h2 padding-bottom='10px'> Maze Dash </h2>
              {!isHovering && <img src="./Maze-dash/maze-demo.png" width="75%"/>}
              {isHovering && <p> Inspired by my volunteering experience at Park School, Maze Dash was created as a shared space for users of all physical/mental abilities.
              Our game features motion sensors, voice settings and options to reduce sensory overload.
              </p>}
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            <div className="project" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} onClick={() => setButtonPopup2(true)}>
              <h4> Saturday School Website </h4>
              {!isHovering2 && <img src="./sat-school.png"/>}
              {isHovering2 && <p> Interned for an educational non-profit featured in Forbes Asia's "30 Under 30". The organization aims to empower Thai students by providing opportunities for them to explore their passions beyond their classroom.
              I was a part of the team that implemented this new iteration of the website.</p>}
            </div>
            <Popup2 trigger={buttonPopup2} setTrigger={setButtonPopup2}></Popup2>
            <div className="project" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} onClick={() => setButtonPopup3(true)}>
              <h2> Measuring Influence and Impact </h2>
              {!isHovering3 && <img src="./knightlab.png" width="230px"/>}
              {isHovering3 && <p> Researched as a part of Knight Lab Studio and partnered with Message Lab to develop a metric of content's influence and impact. 
              Interviewed experts within the field of Altmetrics and Journalism in order to test our hypothesis on existing media. </p>}
            </div>
            <Popup3 trigger={buttonPopup3} setTrigger={setButtonPopup3}></Popup3>
          </div>
        </div>

        <div ref={connect} className="connect">
          <h3> connect with me! </h3>
          <div className="socials">
            <a href="mailto:candytanti5@gmail.com"> <img src="./email.png" alt="email"/> </a>
            <a href="https://www.linkedin.com/in/nayada-tantichirasakul-280702242/"> <img src="./linkedin.png" alt="linkedin" /> </a>
            <a href="https://github.com/candytanti?tab=repositories"> <img src="./github.png" alt="github" /> </a>
          </div>
        </div>

      </div>
    </div> 
  );
}

export default App;
