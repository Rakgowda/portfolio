import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import customstyle from "../styles/Custom.module.css"
import {useState} from "react"



export default function Home() {
  const [frontEnd, setfrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(true)

  function setFrontEndImage(value) {
    setfrontEnd(value)
  }
  function setBackEndImage(value) {
    setBackEnd(value)
  }
  return (
    <div >
      <style jsx>
        {
          `
          @media screen and (min-width: 0px) and (max-width: 750px) {
            #homePage{
                flex-direction: column-reverse;
            }
            #homeImage{
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .Hometext{
              text-align: center;
            }
        }
        `
        }
      </style>
      <div id="homePage" className="d-flex justify-content-center align-item-center m-4">
            <div className="m-3">
            <h1 className={`${styles.title} ${"Hometext"}`}>Hi👋, I'm Rakshith,</h1>
      <h4 className = {`${"Hometext"}`}>a <span><span className={`${styles.underline}`} data-text="front-end" onMouseEnter={()=>setFrontEndImage(false)} onMouseLeave={()=>setFrontEndImage(true)}>front-end</span></span> and 
      <span><span className={`${styles.underline}`} data-text="front-end" onMouseEnter={()=>setBackEndImage(false)} onMouseLeave={()=>setBackEndImage(true)}> back-end</span></span> developer.</h4>
      <div className="d-flex justify-center">
      <div className={``} hidden={frontEnd}>
      <Image src="/giphy.gif" width="200px" height ="200px" ></Image>
      </div>
      <div className={`${customstyle.left36}`} hidden={backEnd}> 
        <Image src="/backend.gif" width="200px" height ="200px" ></Image>
      </div>
      </div>
            </div>
            <div id="homeImage">

            <Image src="/index.png" className={customstyle.infoImage} width={200} height={200} alt="rakshithgowdakv"></Image> 
             
            </div>

      </div>
      <div className={`${customstyle.ml3} ${styles.description}`}>
      I specialize in UI Design, Responsive Web Design, and back-end Development. I love❤️ to create a websites
      that solve the real time problems in the world. 
      </div>


      <div className = {`${customstyle.bottom}`}>

</div>
        
     
    </div>
  )
}
