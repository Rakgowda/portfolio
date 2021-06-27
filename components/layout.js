import {Fragment} from "react";
import style from "../styles/Layout.module.css"
import InfoLayout from "./infoLayout"

const Layout = ({children}) => {

  
    return ( 
<div className={style.dark+" container-fluid"}>
  
    
  <div className="row">
    <div className={style.divBc+" col-sm-3"}>
      <InfoLayout></InfoLayout>
    </div>
    <div className={style.divBc+" col-sm-8"}>
    {children}

    </div>
    <div className={style.divBc+" col-sm-1"}>
      1
    </div>
    </div>
</div>
      
        
        
     );
}
 
export default Layout;