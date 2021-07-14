import custom from "../styles/Custom.module.css"
import Link from "next/link"
import Image from "next/image"
import {AiFillGithub,AiFillLinkedin,AiFillMail,AiFillTwitterCircle} from "react-icons/ai"
const SocialMediaIcon = () => {
    return ( 
        <div className={`${custom.border} ${"d-flex justify-content-center"}` }>
            <style jsx>
                {
                    `

                    @media screen and (min-width: 0px) and (max-width: 750px) {
                        .socialicon{
                            font-size:1.8em;
                        }
                        
                    }
                    
                    `
                }

            </style>
            <div className={"m-2 h5 socialicon"}>
                
                    <a href="https://github.com/Rakgowda" target="_blank" className={custom.inheritColor}>
                   <AiFillGithub></AiFillGithub>
                   </a>
               
            </div>
            <div className={"m-2 h5 socialicon"}>
                 <a href="https://www.linkedin.com/in/rakshithgowda-kv/" target="_blank" className={custom.inheritColor}>
                   <AiFillLinkedin></AiFillLinkedin>
               </a>
            </div>
            {/* <div className={"m-2 h5"}>
                 <a href="mailto: rakshithgowdakv@gmail.com"  className={custom.inheritColor+" mailto"}>
                   <AiFillMail></AiFillMail>
               </a>
            </div> */}
            <div className={"m-2 h5 socialicon"}>
                 <a href="https://twitter.com/Rakshithgowdakv" target="_blank" className={custom.inheritColor}>
                   <AiFillTwitterCircle></AiFillTwitterCircle>
               </a>
            </div>
            
        </div>
     );
}
 
export default SocialMediaIcon;