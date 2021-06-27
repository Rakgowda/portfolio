import React from "react";
import Image from 'next/image'
import style from "../styles/InfoLayout.module.css"
import custom from "../styles/Custom.module.css"

const InfoLayout = () => {

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      console.log(Math.abs(age_dt.getUTCFullYear() - 1970))
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    const info ={"Residence":"Mandya","City":"Mandya","Age":calculate_age(new Date(1996,5, 2))}


    const skills =["html","css","javascript","React js","Polymer js","Next js","Angular","Material js","Node js"
    ,"Mongo DB","Express js","WebScrapping","Bootstrp","c","c++","java","Android","Firebase","python","Selenium"]


    const knowledges =["Git","Git Bash","Tortoise Git","SVN","JIRA","POSTMAN","WINSCP","Eclispe","Android Studio",
"WordPress"]

    return (  
        <React.Fragment>
            <div className={`${style.avatarDiv} ${custom.border} ${custom.mt5} ${"shadow rounded"}`}> 
            <div class="d-flex flex-column justify-content-center align-content-center">
                <div className={custom.mt8+ " d-flex justify-content-center p-2"}>
                <Image src="/avatar2.jpg" className={style.infoImage} width={80} height={80} alt="rakshithgowdakv"></Image> 

                </div>
    			
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
                        <li className="p-1">
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
                <hr>
            </hr>
            </div>
            {/* *** End of location info  */}

            {/* skill start */}
            <div className={custom.border +"  p-4"}>
                <h5 className={`${custom.poppinfont} ${custom.b} ${custom.mb1} ${custom.border} ${"mb-3"}`}>Skill</h5>
                <div class={`${custom.border} ${"row"}`}>

                {
                    skills.map(skill=>{
                        return(
                    <div  class="col-sm-4 d-flex justify-content-center">
                    <span className={`${"badge m-1 text-dark"} ${custom.badgePill} ${custom.yellow}`}>{skill}</span>
                    </div>
                        )
                    })
                }
                    
                    
                </div>
</div>

{/* skill end */}

<div className={custom.border +"  p-4"}>
<h5 className={`${custom.poppinfont} ${custom.b} ${custom.mb1} ${custom.border} ${"mb-3"}`}>Knowledge</h5>

<div className={`${custom.textSecondary}`}>

<ul className={`${"list-unstyled "}`}>

{knowledges.map(knowledge=>{
    return(
<li>
<svg xmlns="http://www.w3.org/2000/svg" color="rgb(255, 200, 21)" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>
    <span className="m-1">{knowledge}</span>
</li>
    )
})}

</ul>

    
</div>

</div>
           
        </React.Fragment>
    );
}
 
export default InfoLayout;