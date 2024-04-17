import './modal.css';
import React from 'react';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Transition } from 'react-transition-group';

const Modal = ({isOpen, onClose, children}) => {

    const onWrapperClick = (event) => {
        if(event.target.classList.contains("modal-wrapper")) onClose();
    }
    return (
        <>
        <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
        <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
                <div className="modal-content">
                    <button onClick={()=> onClose()} className="modal-close-button">
                        
                        <Close />
                    </button>
                    {children}
                </div>
            </div>
        </div>
        ) }
         </Transition>
        </>
   
    )
}
export default Modal;