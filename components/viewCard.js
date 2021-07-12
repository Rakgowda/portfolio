import React from "react"
import customestyle from "../styles/Custom.module.css"
import viewCardStyle from "../styles/ViewCard.module.css"
import Button from "./button"
import Link from "next/link"
import {  Tween,Reveal } from 'react-gsap';


const ViewCard = ({project}) => {
   let linkPresent = project["link"] == ""?false:true;
   let centerStyle = linkPresent?{}:{"justify-content":"center"};
    return ( 
        <React.Fragment>
            <Tween ease="Back.easeIn" from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1}>

                        <div className = {`${viewCardStyle.cardflexItems} `}>
                          
                            <div className="container" className = {`${viewCardStyle.cardMain} ${customestyle.darkBackground}`}>
                            
                            
                                <div className = {`${viewCardStyle.CardImage}`}>
                                    <img src={"/"+project["image"]} className = {`${viewCardStyle.imager}`} width="100%" height="100%" />
                                </div>
                                <div id="header" >
                                   <h5 className={`${customestyle.popfontbold} ${"text-center mt-2"}`}>{project["ProjectName"]}</h5>
                                </div>
                                <div className={`${customestyle.divider1} ${"mb-2"}`}>
            </div>
                                <div className = {`${"p-2 text-center"} ${viewCardStyle.cardbody}`}>
                                {project["intro"]}
                                    
                                </div>
                              
                                <div className = {`${viewCardStyle.cardfooter} ${"mt-2"}`} style={centerStyle}>

                                    
                                <Button link={false} project={project}>

                                        Read more
                                  
                                    </Button>
                                    {
                                        project["link"] != "" && 
                                        <Button link={true}>
                                        <Link href={project["link"]}>
                                            <a  style={{textDecoration:"none",color:"black"}} target="blank">

                                            View Site

                                            </a>
                                        </Link>
                                       

                                    </Button>
                                    }
                                   
                                    
                                    
                                </div>
                                {/* <h5 className = {`${viewCardStyle.headerText}`}>{project["ProjectType"]}</h5> */}
                            
                            </div>

 
                        </div>
</Tween>
        </React.Fragment>
     );
}
 
export default ViewCard;