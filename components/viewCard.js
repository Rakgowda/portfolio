import React from "react"
import customestyle from "../styles/Custom.module.css"
import viewCardStyle from "../styles/ViewCard.module.css"
import Button from "./button"
import Link from "next/link"

const ViewCard = () => {
    return ( 
        <React.Fragment>

                        <div className = {`${viewCardStyle.cardflexItems} `}>
                            <div className="container" className = {`${viewCardStyle.cardMain} ${customestyle.darkBackground}`}>
                                <div className = {`${viewCardStyle.CardImage}`}>
                                    <img src="/bank.jpg" className = {`${viewCardStyle.imager}`} width="100%" height="100%" />
                                </div>
                                <div id="header" >
                                   <h5 className={`${customestyle.popfontbold} ${"text-center mt-2"}`}>{"INDIA COVID19 LIVE TRACKING "}</h5>
                                </div>
                                <div className={`${customestyle.divider1} ${"mb-2"}`}>
            </div>
                                <div className = {`${"p-2"} ${viewCardStyle.cardbody}`}>
                                E - banking website allow us to work on backing sajfsa sfjfsa dsjhfjhsd
                                    sdfdsgsdg
                                    sgdgsdgsgasd
                                    sdfsdfg sfdsfsdf  as sasad as as asdas as dasd
                                    
                                </div>
                              
                                <div className = {`${viewCardStyle.cardfooter} ${"mt-2"}`}>
                                    
                                <Button>

                                        Read more
                                  
                                    </Button>
                                    <Button>
                                        <Link href="https://indiacovid19tracking.netlify.app/">
                                            <a  style={{textDecoration:"none"}} target="blank">

                                            View Site

                                            </a>
                                        </Link>
                                       

                                    </Button>
                                    
                                    
                                </div>
                            
                            
                            </div>

 
                        </div>

        </React.Fragment>
     );
}
 
export default ViewCard;