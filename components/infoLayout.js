import React,{useEffect} from "react";
import Image from 'next/image'
import style from "../styles/InfoLayout.module.css"
import custom from "../styles/Custom.module.css"
import dynamic from "next/dynamic";
import SocialMediaIcon from "./socialMediaIcon"
import { VscClose } from "react-icons/vsc";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
  });

 

const InfoLayout = ({hamberger,toggelHamberger}) => {
 
    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
    //   console.log(Math.abs(age_dt.getUTCFullYear() - 1970))
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    // useEffect(() => {
    //     if(hamberger)
    //     {
    //         window.document.querySelector("#slideBar1").style.display = "none";
    //         setTimeout(() => {
    //             if(window.innerWidth<750)
    //             {
    //                 window.document.querySelector("#slideBar1").style.display = "block";
    //             }
                
    //         }, 1000);
    //     }
    //     else{
    //         window.document.querySelector("#slideBar1").style.display = "none";
    //     }

       
    // }, [hamberger])
    const info ={"Residence":"Mandya","City":"Mandya","Age":calculate_age(new Date(1996,5, 2))}


    const skills =["html","css","javascript","React js","Redux","Polymer js","Next js","Angular","Material js","Node js"
    ,"Mongo DB","Express js","WebScrapping","Bootstrp","c","c++","java","Android","Firebase","python","Selenium"]


    const knowledges =["Git","Git Bash","Figma","Tortoise Git","SVN","JIRA","POSTMAN","WINSCP","Eclispe","Android Studio",
"WordPress"]

    return (  
        <div className={`${custom.darkBackground}`}>
        
            <div className={`${style.avatarDiv} ${custom.border} ${""} ${"shadow rounded"}`}> 
            <VscClose id="slideBar1" className={`${style.hambergerclose}`} onClick={toggelHamberger} 
            
            ></VscClose>
            <div className="d-flex flex-column justify-content-center align-content-center">
               <div className = {`${style.flex}`}>
               <div className={custom.mt8+ " d-flex justify-content-center p-2"}>
                <Image src="/index.png" className={style.infoImage} width={80} height={80} alt="rakshithgowdakv"></Image> 
                  
                </div>
         
                <div data-tip data-for="statusforwork" className={`${custom.readytoWork} ${style.status}`}></div>
               </div>
                <ReactTooltip  id="statusforwork" delay-show='1000' type="dark" place="right" effect="float">
        I'm available to work
      </ReactTooltip>
                
    			
		<div className={style.primary+" text-center p-2"}>
		Rakshithgowda KV
		</div>    
            <div className={style.secondary+" text-center p-2"}>
        Front-end Developer 
            </div>         
            </div>  
            
            </div>

            {/* *** Begging of location info  */}
            <div className={custom.border +" p-4"}>
                <ul className={`${"list-unstyled "}`}>

              {
                    Object.keys(info).map(e=>{
                       return (
                        <li className="p-1" key={e}>
                        <div className="d-flex justify-content-between">
                        <div className={style.subPrimary}>
                            <span>{e}: </span>
    
                            </div>
                            <div className={style.subSecondary}>
                        <span>
                        {info[e]}
                        </span>
                                
                            </div>
                 </div>     
                        </li>
                       )
                    })
              }
                    
                </ul>
                <div className={custom.divider}>
            </div>
            </div>
            {/* *** End of location info  */}

            {/* skill start */}
            <div className={custom.border +"  p-4"}>
                <h5 className={`${custom.poppinfont} ${custom.b} ${custom.mb1} ${custom.border} ${"mb-3"}`}>Skill</h5>
                <div className={`${custom.border} ${"row"}`}>

                {
                    skills.map(skill=>{
                        return(
                    <div  className="col-sm-4 d-flex justify-content-center">
                    <span className={`${"badge m-1 text-dark"} ${custom.badgePill} ${custom.yellow}`}>{skill}</span>
                    </div>
                        )
                    })
                }
                    
                  
                </div>
                <div className={`${custom.divider} ${"mt-4"}`}>
            </div>       
</div>

{/* skill end */}

{/* Start knowledge */}
<div className={custom.border +"  p-4"}>
<h5 className={`${custom.poppinfont} ${custom.b} ${custom.mb1} ${custom.border} ${"mb-3"}`}>Knowledge</h5>

<div className={`${custom.textSecondary}`}>

<ul className={`${"list-unstyled "}`} style={{"margin-bottom": "-.5rem"}}>

{knowledges.map(knowledge=>{
    return(
<li className={`${custom.fontSize13}`} key={knowledge}>
<svg xmlns="http://www.w3.org/2000/svg" color="rgb(255, 200, 21)" width="20" height="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>
    <span className="m-1">{knowledge}</span>
</li>
    )
})}

</ul>

    
</div>

</div>
           {/* End knowledge */}
      
      {/* Start social media */}
      <div className={`${style.footerStyle}`}>
      <SocialMediaIcon>
          
          </SocialMediaIcon>
      </div>
{/* End social media */}
        </div>
    );
}
 
export default InfoLayout;