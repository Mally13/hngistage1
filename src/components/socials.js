import { React,  } from "react";
import slackimg from '../images/slack.svg'
import githubimg from '../images/github.svg'


function Socials(){
    return(
        <div className="socials-container">
                <div className="social-link">
                    <a id='social-slack' href='https://slack.com/'>
                        <img src={slackimg} alt='slack'/>                          
                    </a>
                </div>
                <div className="social-link">
                    <a id='social-slack' href='https://github.com/mally13'>
                        <img src={githubimg} alt='github'/>                          
                    </a>
                </div>
        </div>
    )
}
 

export default Socials;