import gridstyle from "../styles/gridlist.module.css"
import Image from 'next/image'
import {IoSchoolOutline} from "react-icons/io5"
import {BiBuildingHouse} from "react-icons/bi"
import {IoLocationOutline} from "react-icons/io5"
import {GiTiedScroll} from "react-icons/gi"
import {  Tween,Reveal } from 'react-gsap';
import React from "react"

const GridList = (props) => {
    // console.log(props)
    let educationinfo=props.educationinfo;
    return (  
        <React.Fragment>
        <Tween ease="Back.easeIn"  stagger={0.5} from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1.5}>

        <div width={props.width} height={props.height} style={{"border":"5px solid rgb(28, 31, 51)",
        "background-color": "rgb(28, 31, 51)","box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
        "-webkit-box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)",
        "-moz-box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)"}}>

            <h2 id="header" className={`${gridstyle.headerTitle}`} >
                {educationinfo.year}
            </h2>

            <div className="row">
  <div className="col-6">
  <img src={educationinfo.imgsrc} className={`${gridstyle.imageGrid}`} alt={educationinfo.school}></img> 
  </div>
  <div className="col-6" >
      
      <div className={gridstyle.container}>
      <div className={gridstyle.item}>
              <IoSchoolOutline className={"m-1"}></IoSchoolOutline>{educationinfo.school}
          </div>
          <div className={gridstyle.item}>
              <BiBuildingHouse className={"m-1"}></BiBuildingHouse>{educationinfo.board}
          </div>
          <div className={gridstyle.item}>
              <IoLocationOutline className={"m-1"}></IoLocationOutline>{educationinfo.location}
          </div>
          <div className={gridstyle.item}>
              <GiTiedScroll className={"m-1"}></GiTiedScroll>{educationinfo.Percentage}
          </div>
          
      </div>
      
      </div>
  
</div> 


            <h2 id="fotter" className={`${gridstyle.footerTitle}`}>
                {educationinfo.level}
            </h2>
        </div>
        </Tween>
        </React.Fragment>
    );
}
 
export default GridList;