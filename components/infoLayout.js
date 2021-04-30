import React from "react";
import Image from 'next/image'
import style from "../styles/InfoLayout.module.css"
import custom from "../styles/Custom.module.css"

const InfoLayout = () => {
    const info ={"Residence":"Mandya","City":"Mandya","Age":"26"}
    return (  
        <React.Fragment>
            <div className={`${style.avatarDiv} ${custom.border} ${custom.mt5}`}> 
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
           
        </React.Fragment>
    );
}
 
export default InfoLayout;