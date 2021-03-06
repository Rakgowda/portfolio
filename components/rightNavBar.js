import custom from "../styles/Custom.module.css"
import style from "../styles/rightNavBar.module.css"
import {AiFillHome} from "react-icons/ai"
import {FiBookOpen,FiHome} from "react-icons/fi"
import {BsClipboardData} from "react-icons/bs"
import {AiOutlineSmile} from "react-icons/ai"
import {CgWorkAlt} from "react-icons/cg"
import Link from "next/link"
import {useState,useEffect} from "react"
import { useRouter } from 'next/router'
import {BiCodeCurly} from "react-icons/bi"
const RightNavBar = () => {

    const router = useRouter()
    console.log(router)
    const [homestate, setHomestate] = useState(false);
    const [educationstate, setEducationstate] = useState(false);
    const [Resumestate, setresumestate] = useState(false);
    const [projectstate, setprojectstate] = useState(false);

    useEffect(() => {
        if(router.route != undefined)
    {
        let routerSelected = router.route.split("/")[1]
        routerSelected=routerSelected==""?"home":routerSelected=="education"?"education":routerSelected=="project"?"project":"resume";
        seelectedNavBar(routerSelected)
    }
    }, [])
    var seelectedNavBar=(value)=>{
        setHomestate(false);
        setEducationstate(false);
        setresumestate(false);
        setprojectstate(false)

       value=="home"?setHomestate(true):value=="education"?setEducationstate(true):value=="project"?setprojectstate(true):setresumestate(true);
        
     
    }

    
    return ( 
        <div className={`${"d-flex flex-column align-items-center justify-content-center"} ${custom.border} ${style.rightNav}`}>
             <style jsx>{`
       
       @media screen and (min-width: 0px) and (max-width: 1000px) {
        .rightNavText { display: none; }  
        .rightNavSvg {font-size:1.5rem}
        
        
      }

      `}</style>
            <div id ="home"  className={`${custom.rightFont} ${"p-3"} `} onClick={()=>seelectedNavBar("home")}>
            <Link href="/">
                <div className={`${"d-flex justify-content-center align-items-center rightNavSvg"} ${style.itemRightNav} ${homestate?style.activeNavBar:""}`} >
                 
                    <FiHome className={`${custom.zindex1} ${"rightNavPadding"}`}>

                    </FiHome>
                   
                    <div  className={`${custom.zindex1} ${"m-1 rightNavText"}`}>
                  
                    Home
                   
                    </div>
                   
                </div>
                </Link>
            </div>
            <div className={`${custom.rightFont} ${"p-3"}`} onClick={()=>seelectedNavBar("education")}>
            <Link href="/education">
            <div className={`${"d-flex justify-content-center align-items-center rightNavSvg"} ${style.itemRightNav} ${educationstate?style.activeNavBar:""}`}>
                 
                 <FiBookOpen className={`${custom.zindex1} ${"rightNavPadding"}` }></FiBookOpen>
                 
                 <div className={`${custom.zindex1} ${"m-1 rightNavText"}`}>
                 Education
                 </div>
                
             
             </div>
             </Link>
            </div>
            <div className={`${custom.rightFont} ${"p-3"}`} onClick={()=>seelectedNavBar("resume")}>
            <Link href="/workexperience">
            <div className={`${"d-flex justify-content-center align-items-center rightNavSvg"} ${style.itemRightNav} ${Resumestate?style.activeNavBar:""}`}>
            <CgWorkAlt className={`${custom.zindex1} ${"rightNavPadding"}`}></CgWorkAlt>
             
                 <div  className={`${custom.zindex1} ${"m-1 rightNavText"}`}>
                 Experience
                 </div>
             
             </div>
             </Link>
               
            </div>
            <div className={`${custom.rightFont} ${"p-3"}`} onClick={()=>seelectedNavBar("project")}>
            <Link href="/project">
            <div className={`${"d-flex justify-content-center align-items-center rightNavSvg"} ${style.itemRightNav} ${projectstate?style.activeNavBar:""}`}>
            <BiCodeCurly  className={`${custom.zindex1} ${"rightNavPadding"}`}></BiCodeCurly> 
                 <div className={`${style.noWarp} ${"m-1 rightNavText"} ${custom.zindex1}`} >
                 Project
                 </div>
             
             </div>
             </Link>
         </div>    
        
        </div>
     );
}
 
export default RightNavBar;