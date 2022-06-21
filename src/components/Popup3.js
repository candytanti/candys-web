import React from 'react';
import './Popup.css';

function Popup3(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div class = "popup-inner">
                <div>
                    <h3> Measuring Influence and Impact </h3>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                    { props.children }
                    <img src="measure-impact.png" alt="measuring impact image" width="60%"/>
                    <h4> My motivation for joining the research team </h4>
                    <p> I wanted to work on the Measuring Influence and Impact project because I have a strong interest in technology and the interpretation of data for social good. I have always believed that the media has a big impact in the decisions we make in our daily lives and what we come to distinguish as good and bad. However, in an era where unfiltered data rapidly spreads, that distinction may be hazed by biased or purely false information. Thus, I believe there is a strong need for something like the cultural impact score for media outlets to truly understand their reach as well as identify who their audiences are and what they are interested in. Additionally, the data collected for this score can be vital to highlighting the strengths and weaknesses of news through the media and keeping social media companies accountable for their reach. {'\n'}</p>
                    
                    <h4> The following excerpt is our goal, as written on the Knight Lab website </h4>
                    <p> The world is drowning in content. On Wordpress alone, 70 million posts are published per month. In an ocean of noise, how can you tell which ideas really resonate? </p>

                    <p> For this Knight Lab Studio project, students will partner with Message Lab — a content and strategy agency that specializes in combining “journalism for brands” with content intelligence — to explore this question. Their clients are increasingly interested in whether their publishing efforts achieved any kind of influence or impact. </p>
                    
                    <p> How are those terms defined? Is it even possible to measure influence or impact? That’s what the team on this project will explore. In all likelihood, our methodology will consist of a mix of things — signals and metrics that together form a rough picture of influence and impact — but deciding which ones, and in what proportions, will be the real trick. While the goal is to propose a model for measurement, we believe the research and thinking done along the way will be equally valuable, if not more so. {'\n'} </p>
                    <a href="https://studio.knightlab.com/projects/measuring-impact/" padding-bottom="10px"> Check out the project details! </a>
                    <p> {'\n'} </p>
                    <p> {'\n'} </p>
                    <p>This is an ongoing project. Stay tuned for our research results... </p>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup3