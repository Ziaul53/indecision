import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props)=>(
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.closeModal}
        contentLabel = "Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal-title">Selected Option</h3>
        {props.selectedOption && <p className="modal-body">{props.selectedOption}</p>}
        <button className="button" onClick = {props.closeModal}>Okay</button>
    </Modal>
);
  

export default OptionModal;