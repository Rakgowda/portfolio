import React from "react";
import { useState } from "react";
import buttonStyle from "../styles/Button.module.css"
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  
const Button = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return ( 
        <React.Fragment>
        <div className = {`${buttonStyle.wrapper}`} onClick={props.link==false?openModal:null}>
           
            <a src="" className = {`${buttonStyle.buttonlink}`}>
                <span>{props.children}</span>
            </a>
           
        </div>
         {props.link==false && <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{props.project["ProjectName"]+", "+props.project["ProjectType"]}</h2>
        <ul>
            {
              props.project["ListPoint"].map(projectpoint=>{
                return (
                  <li>{projectpoint}</li>
                )
              })
            }
        </ul>
        
        <div class="modal-footer">
          <button type="button" onClick={closeModal} className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </Modal>}
        </React.Fragment>
     );
}
 
export default Button;