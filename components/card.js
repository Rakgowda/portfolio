import React from "react";
import customestyle from "../styles/Custom.module.css"
import expStyle from "../styles/Experience.module.css"
import {  Tween,Reveal } from 'react-gsap';

const Card = (props) => {
    // console.log(props.data)
    let {data}=props;
   
    return ( 
        <React.Fragment>

            <div id="card" className={expStyle.card}>
            <Tween ease="Back.easeIn"  stagger={0.5} from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1.5}>

                    <div id="card1" className={expStyle.carditem}>

                    <div id="childMainCard" className={`${expStyle.childCard}`}>
                        <div id="childItemCard1" className={`${expStyle.childitemcard} ${customestyle.primarybackgroud} ${"text-center"} ${expStyle.itemText}`}>
                       
                            <div>
                            <h2 className={customestyle.popfontbold}>{data.company}</h2>
                            </div>                            
                             {/* {data.company} */}
                        </div>
                        <div id="childItemCard2" className={expStyle.childitemcard}>
                           

                            <div className={`${expStyle.divliststyle} ${customestyle.popfont}`}>

                                {
                                    data.detail.map(e=>{
                                        
                                        // console.log(e)
                                        return ( <div>
                                        <span className={customestyle.primaryColor}>{e[0]}</span> : {e[1]}
                                    </div>)
                                    })
                                }

        
                            
                            </div>
                    
                        </div>

                    </div>
                    <div className={`${customestyle.divider1} ${"mb-2"}`}>
            </div>
            <Tween ease="Back.easeIn"  stagger={0.5} from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1.5}>

                    <div className={`${"mb-3"} ${customestyle.ml1}`}>
                    <span className={customestyle.primaryColor}>Technology </span> 
                        
                         : {data.technology.map(e=>{
                             console.log(data.technology.indexOf(e))
                             if(data.technology.length == data.technology.indexOf(e)+1)
                             {
                                return <span className={`${"badge m-1 text-dark"} ${customestyle.badgePill} ${customestyle.yellow}`}>{e}</span>
                    
                             }
                             return <span className={`${"badge m-1 text-dark"} ${customestyle.badgePill} ${customestyle.yellow}`}>{e}</span>
                         })}
                    </div>
                    </Tween>
                       
                    </div>
                </Tween>
                    
                </div>
        </React.Fragment>
     );
}
 
export default Card;