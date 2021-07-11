import React,{useState,useRef,forwardRef,useImperativeHandle } from 'react';
import snabarStyle from "../styles/Snakbar.module.css"

    // We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
export const Snakbar = forwardRef((props, ref) => {

    // create useSate for isActive
    // const isActive  = useRef("false");
    const [state, setstate] = useState(false);
    // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
    useImperativeHandle(ref, () => ({

        openSankBar(){
            debugger;
            // isActive.current = "true";
            setstate((prev)=>!prev)
            resetting()
        
    }
    
      }));


      function resetting(){
        setTimeout(() => {
            setstate((prev)=>!prev)
        },3000);
      }

      

    return (
        <div>
           
            <div className = {state ? `${ snabarStyle.snackbar } ${snabarStyle.show}` : snabarStyle.hide}>
        {props.children}
      </div>
    
        </div>
    );
}
)

