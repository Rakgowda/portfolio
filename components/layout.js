import {Fragment} from "react";
import style from "../styles/Layout.module.css"
import InfoLayout from "./infoLayout"
import RightNavBar from "./rightNavBar"
import custom from "../styles/Custom.module.css"
const Layout = ({children}) => {

  
    return ( 

      
      <div className={style.dark+" container-fluid"}>
        <style jsx>{`
       
       @media screen and (min-width: 0px) and (max-width: 1000px) {
        .rightNavText { display: none; }  
        .rightNavSvg {font-size:1.5rem}
        
        
      }
         
@media screen and (min-width: 0px) and (max-width: 750px) {
    #leftLayout{
       display:none;
    }
    
    
  }
 

      `}

        </style>
    
      <div className="row">
        <div id="leftLayout" className={`${style.divBc} ${"col-sm-3"} ${style.stickyLeftNav}` }>
          <InfoLayout></InfoLayout>
        </div>
        <div className={`${style.divBc} ${"col-sm-8"} ${style.centerScreen}` }>
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