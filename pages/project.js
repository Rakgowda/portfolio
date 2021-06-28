import customestyle from "../styles/Custom.module.css"
import projectStyle from "../styles/Project.module.css"
import ViewCard from "../components/viewCard"
const Project = () => {

    let projectDeatil =[{
        "ProjectType":"Infosys Project","ProjectName":"E-Banking Website", "intro":"Developing E-Banking web application using Polymer.js andMaterialize CSS.",
        "ListPoint":["Developing E-Banking web application using Polymer.js andMaterialize CSS.",
    "Identified web-based user interactions and developed highly responsive user interface components via polymer concepts",
"Developed custom switch component to select different payment type","Fixed bugs from existing website and implemented enhancements that significantly improved web functionality and speed."
],"link":"","image":"banking.jpg"
    },{
        "ProjectType":"Infosys Project","ProjectName":"Salesman quotation", "intro":"Developed Salesman quotation web app using MERN.",
        "ListPoint":["Developed Salesman quotation web app using MERN.",
    "Designed and developed back-end using Express.js, Node.js and Mongo DB",
"Determined the structure and design of web pages based on user requirements and balanced functional & aesthetic designs.",
"Developed custom card view to show the customer quotation request",
"Used REDUX to store global variables",
"Developed approval flow for quotation. Where all quotation will go for manager approve."
],"link":"","image":"quoation.jpg"
    },{
        "ProjectType":"Personal Project","ProjectName":"Covid-19 Live Tracking", "intro":"Developed covid-19 live tracking website using react.js and REDUX",
        "ListPoint":["Developed covid-19 live tracking website using react.js and REDUX.",
        "User can able to view India total number of infected, recovered,active and death cases.",
    "User can also able to select their state to view total number of infected, recovered, active and death cases.",
"User can hover on state map to see total number of infected,recovered, active and death cases"
],"link":"https://indiacovid19tracking.netlify.app/","image":"corona.jpg"
    },{
        "ProjectType":"Personal Project","ProjectName":"GST invoice generator", "intro":"Developed small scale business management windows app using electron.js and react.js",
        "ListPoint":["Developed small scale business management windows app using electron.js and react.js",
        "User can able to generate GST invoice bill after selling he items.",
    "User can track the buy and sell items."
],"link":"","image":"invoice.jpg"
    }]

    return ( 
        <div>
            <div className={`${customestyle.title2} ${"text-center"}`}>
                <div>
                <span>{"{"}</span> Projects <span>{"}"}</span>
                    </div>
                <div>
                {/* <img src="/relax.svg" width="100px" height="100px" className={customestyle.work}></img> */}

                </div>
                </div>

                <div id="project body">
                    <div className = {`${projectStyle.cardflex} ${customestyle.popfont}`}>


                  {
                        projectDeatil.map(project=>{
                            return (<ViewCard project={project}> </ViewCard>)
                        })
                  }
                    
                        
                    </div>

                </div>
        </div>
     );
}
 
export default Project;