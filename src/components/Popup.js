import React from 'react';
import './Popup.css';

function Popup(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div class = "popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                { props.children }
                <img src="./Maze-dash/Maze-dash-1.png" alt="pdf of Maze dash paper" width="100%"/> 
                <img src="./Maze-dash/Maze-dash-2.png" alt="pdf of Maze dash paper" width="100%"/> 
                <img src="./Maze-dash/Maze-dash-3.png" alt="pdf of Maze dash paper" width="100%"/> 
                <img src="./Maze-dash/Maze-dash-4.png" alt="pdf of Maze dash paper" width="100%"/> 
            </div>
        </div>
    ) : "";
}

export default Popup