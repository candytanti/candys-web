import React from 'react';
import './Popup.css';

function Popup2(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div class = "popup-inner">
                <div>
                    <h3> Saturday School Internship </h3>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                    { props.children }
                    <a href="https://www.saturday-school.org/"> Check out the website! </a>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup2