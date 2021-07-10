import customestyle from "../styles/Custom.module.css"
import expStyle from "../styles/Experience.module.css"
import Card from "../components/card"

const WorkExperience = () => {

    let Experience ={
        "company": "Infosys Limited, Bangalore",
        "detail": [
          [
            "Experience",
            "2+ years"
          ],
          [
            "Joined",
            "Aug 2019"
          ],
          [
            "Role",
            "Front-end developer "
          ]
        ],
        "technology": [
          "Polymer3.js",
          "React.js",
          "Redux",
          "javascript",
          "node.js",
          "selenium"
        ]
      }

      let Experience2 ={
        "company": "Infosys Limited, Mysore",
        "detail": [
          [
            "Experience",
            "6 months"
          ],
          [
            "Joined",
            "Jan 2019"
          ],
          [
            "Role",
            "MERN developer{intern}"
          ]
        ],
        "technology": [
          "Angular",
          "Mongo DB",
          "node.js",
          "express.js"
        ]
      }
    return ( 
        <div>
           <div id="Experience Title">
         
                
                <div className={`${customestyle.title2} ${"text-center"}`}>
                <div>
                Work Experience
                    </div>
                <div>
                <img src="/relax.svg" width="100px" height="100px" className={customestyle.work}></img>

                </div>
                </div>
            </div>

            <div id="Experience body" className={expStyle.cardcenter}>
                <Card data={Experience}>

                </Card>
                <Card data={Experience2}>

                </Card>
            </div>
            <div className = {`${customestyle.bottom}`}>

                </div>
        </div>
     );
}
 
export default WorkExperience;