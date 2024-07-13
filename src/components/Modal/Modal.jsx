import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className='modalOverlay' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='modalCloseButton' onClick={onClose}>X</button>
        <div className='modalContent'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
