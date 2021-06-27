import customestyle from "../styles/Custom.module.css"
import GridList from "../components/gridlist"

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
            <div id="education Title">
                
                <div className={`${customestyle.title} ${"text-center"}`}>
                <img src="/graduation-hat.svg" width="50px" height="50px" className={customestyle.hat}></img>
                Education
                </div>
            </div>

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
        </div>
     );
}
 
export default Education;