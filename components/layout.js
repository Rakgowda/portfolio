import {Fragment, useState} from "react";
import style from "../styles/Layout.module.css"
import InfoLayout from "./infoLayout"
import RightNavBar from "./rightNavBar"
import custom from "../styles/Custom.module.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { usrState,useEffect } from "react";
const Layout = ({children}) => {

  const [hamberger, sethamberger] = useState(false)

  useEffect(() => {
    function handleResize() {
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      if(window.innerWidth >750)
      {
        sethamberger(true)
      }
}
if(window.innerWidth >750)
{
  sethamberger(true)
}


    window.addEventListener('resize', handleResize)
  }, [])

  function toggelHamberger() {  
    debugger
    sethamberger(prev=>!prev);
    // alert(hamberger)
  }
    return ( 

      
      <div className={style.dark+" container-fluid"}>
        <style jsx>{`
       
       @media screen and (min-width: 0px) and (max-width: 1000px) {
        .rightNavText { display: none; }  
        .rightNavSvg {font-size:1.5rem}
        
        
      }
         
@media screen and (min-width: 0px) and (max-width: 750px) {
    #leftLayout{
      
      z-index:1;
      position: absolute;
      transition: margin-left 1s ease;
      width:100%;
      
    }
    #slideBar1{
      transition: right 2s ease;
    }
  }
 
      `}

        </style>
    
      <div className="row">
        <div id="leftLayout" className={`${style.divBc} ${"col-sm-3"} ${style.stickyLeftNav} `} style={{marginLeft:hamberger?"0%":"-100%"}} >
          <InfoLayout hamberger={hamberger} toggelHamberger ={toggelHamberger}></InfoLayout>
        </div>
        <div className={`${style.divBc} ${"col-sm-8"} ${style.centerScreen}` } id="centerBody">
          <div>
            <GiHamburgerMenu id="slideBar" className={`${style.hamberger}`} onClick={toggelHamberger}>

            </GiHamburgerMenu>

            
          </div>
        {children}
    
        </div>
        <div className={`${style.divBc} ${"col-sm-1"} ${style.rightNav} ${custom.darkBackground}` }>
          <RightNavBar></RightNavBar>
        </div>
        </div>
    </div> 
     
        
        
     );
}
 
export default Layout;