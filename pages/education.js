import customestyle from "../styles/Custom.module.css"
import GridList from "../components/gridlist"
import {  Tween,Reveal } from 'react-gsap';

const Education = () => {
    let schoolInfo ={school:"S.G High school", board:"State board",year:"2010-2012",
    level:"SSLC",location:"Halagur",Percentage:"86.88%",
    imgsrc:"/schooll.svg",alt:"school"
}

let pucnfo ={school:"R.K PU College", board:"State board",year:"2012-2014",
level:"P.U.C",location:"K Honnalagere",Percentage:"90.50%",
imgsrc:"/science.svg",alt:"puc"
}
let befo ={school:"NMIT", board:"VTU",year:"2015-2019",
level:"B.E",location:"Bengaluru",Percentage:"8.57 CGPA",
imgsrc:"/coding.svg",alt:"be"
}

    return ( 
        <div>
            <Tween ease="Back.easeIn" from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1}>

            <div id="education Title">
                
                <div className={`${customestyle.title} ${"text-center"}`}>
            {/* <Tween ease="Back.easeIn"  stagger={0.5} from={{opacity:0,y: '-20px'}} to={{opacity:1,y: '0px'}} duration={1.5}> */}

                <img src="/graduation-hat.svg" width="50px" height="50px" className={customestyle.hat}></img>
                {/* </Tween> */}
                Education
                </div>
            </div>
</Tween>
            <div id="educalition list" className={customestyle.educationlist}>

            <div className={customestyle.educationBox}>
          
            <GridList educationinfo={schoolInfo}>
            </GridList>
            
            <br></br>
            <br></br>
            <GridList educationinfo={pucnfo}>
            </GridList>
            <br></br>
            <br></br>
            <GridList educationinfo={befo}>
            </GridList>
            </div>

            

            </div>
            <div className = {`${customestyle.bottom}`}>

</div>
<br></br>
<br></br>
        </div>
     );
}
 
export default Education;