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
                    <p>
                        Saturday School is a non-profit based in Thailand with the aim of encouraging volunteers from all walks of life to participate in improving Thai education in their own ways. The organization's goals were to create more opportunities for Thai students to discover their passions and pursue their interests, even if these topics may not be within the traditional curriculum.
                        Even though it was founded in 2014, Saturday School has quickly grown into a community of over 8,000 students and 3,000 volunteers. With the team's passion and determination, they have been able to partner with many organizations including Deloitte, Unicef and the United States Embassy to increase their impact on the Thai community.
                    </p>
                    <p>
                        During my internship, I was able to work on developing an interactive curriculum for their classrooms. I collaborated on hosting an educational camp with the organization's partner, Citibank, as well as pitched our "Safe Internet" Bootcamp pitch to DTAC, a major telecommunications conglomerate in Thailand. Using my knowledge of Computer Science, I was also tasked with rebuilding aspects of the re-branded website.
                    </p>
                    <a href="https://www.saturday-school.org/"> Check out the website! </a>
                    <div className="sat">
                        <img src="./sat-school.png" alt="sat school logo"/>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup2