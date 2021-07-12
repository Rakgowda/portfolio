import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import customstyle from "../styles/Custom.module.css"
import {useState,useRef,useEffect} from "react"
import Skeleton from 'react-loading-skeleton';
import {  Tween,Reveal } from 'react-gsap';


export default function Home() {
  const [frontEnd, setfrontEnd] = useState(true);
  const [backEnd, setBackEnd] = useState(true)
  // const image = useRef()
  const [hide, setHide] = useState(true)

 
  function setFrontEndImage(value) {
    setfrontEnd(value)
  }
  function setBackEndImage(value) {
    setBackEnd(value)
  }
  function hideSkeleton()
  {
    setHide(false)
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
            
            <Tween ease="Back.easeIn"  stagger={0.5} from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1.5}>
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
      </Tween>
      
            </div>
         
            <div id="homeImage">
              <div className={hide?"":customstyle.hide}>
            <Skeleton circle={true} className={`${customstyle.infoImage}`} height={200} width={200} />
            </div>
            <Image 
            onLoad={hideSkeleton}
            src="/index.png" 
            className={customstyle.infoImage} 
            width={200} 
            height={200} 
            alt="rakshithgowdakv" 
            placeholder="blur"
            >
              
              </Image> 
             
            </div>

      </div>
      <Reveal >
      <Tween ease="Back.easeIn"  from={{opacity:0,x: '-20px'}} to={{opacity:1,x: '0px'}} duration={1}>

      <div className={`${customstyle.ml3} ${styles.description}`}>
     
      I specialize in UI design🎨, responsive web design, and back-end development. Responsible for developing 
      website that gives users a seamless and rich internet experience. 
      </div>
</Tween>
</Reveal>
      <div className = {`${customstyle.bottom}`}>

</div>
        

     
    </div>
  )
}
