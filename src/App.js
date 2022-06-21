import { useRef } from "react";
import './App.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Popup from './components/Popup';
import Popup2 from './components/Popup2';
import Popup3 from './components/Popup3';
import { useState } from "react";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const experiences = useRef(null);

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
          <a className="contact" href="mailto:candytanti2024@u.northwestern.edu"> 
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut pulvinar augue. Phasellus nisl nulla, laoreet quis sagittis a, ultricies eget turpis. Nam non eleifend nisl, vitae efficitur tortor. Curabitur finibus tellus magna, efficitur laoreet elit mattis sit amet. Nullam porttitor magna id fringilla commodo. Fusce vitae est in quam tempus finibus. Vestibulum et ex in ligula rutrum imperdiet. Nam in leo a felis porttitor consectetur vitae congue justo.
              </p>
              <p> </p>
              <p>
              Morbi eu ullamcorper turpis, non lobortis tortor. Donec vitae nunc ultrices nibh posuere convallis. Quisque ante turpis, luctus imperdiet dapibus sit amet, malesuada id magna. Ut laoreet blandit pretium. Phasellus vel ligula lorem. Aliquam lacus risus, rhoncus a bibendum at, semper cursus quam. Mauris egestas nec ante nec accumsan. Curabitur ut dui scelerisque, bibendum elit nec, rutrum nisl. Duis sollicitudin sit amet nulla quis feugiat. Nulla ut magna at neque porttitor imperdiet. In rutrum lectus est, in convallis quam cursus sit amet. Nam pretium congue nisi. Nunc fringilla, nibh nec rutrum tincidunt, metus felis pharetra turpis, quis varius sem nulla eget risus. Donec interdum elit sit amet luctus maximus. Nunc porttitor lorem id vestibulum feugiat. Integer aliquet nibh sit amet eros consequat viverra.
              </p>
            </div>
            <div>
              <p> Exeter </p>
              <p> Northwestern </p>
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

      </div>
    </div> 
  );
}

export default App;
