import { React,  } from "react";
import zuri from '../images/zuri.svg'
import I4G from '../images/I4G.svg'


function Footer(){
    return(
        <div className="footer">
            <div className="border-top">
                <div className="footer-link">
                    <a id='footer-zuri' href='https://slack.com/'>
                        <img src={zuri} alt='zuri'/>                          
                    </a>
                </div>
                <div className="footer-link">
                    <a id='footer-hng' href='https://github.com/mally13'>
                        HNG Internship 9 Frontend Task                          
                    </a>
                </div>
                <div className="footer-link">
                    <a id='footer-i4g' href='https://github.com/mally13'>
                        <img src={I4G} alt='I4G'/>                          
                    </a>
                </div>
            </div>
        </div>
    )
}
 

export default Footer;