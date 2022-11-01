import { React,  } from "react";


function Links({initialData}){
    return(
        <div className="links-container">
            {initialData.map((linkData,idx) => (
                <a className="link" key={idx} id={linkData[0]} href={linkData[1]}>{linkData[2]}<br/>
                    <div className="space">&nbsp;</div>
                    <div class="subtext">{(linkData[3]!=='')?linkData[3]:'\u00a0'}</div>
                </a>
                

            
            
            ))}
        </div>
    )
}


export default Links;