import customestyle from "../styles/Custom.module.css"
import projectStyle from "../styles/Project.module.css"
import ViewCard from "../components/viewCard"
const Project = () => {
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

                    <ViewCard > </ViewCard>
                    <ViewCard > </ViewCard>
                    
                        
                    </div>

                </div>
        </div>
     );
}
 
export default Project;