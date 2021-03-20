import React from 'react';
import '../assets/css/modal.scss';

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <i className="fa fa-times"
    onClick={closeModal}
    style={{
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
      zIndex:999,
      mixBlendMode:"difference"
    }}
    />
  );

  return (
    <div className="overlay">
      
        { closeicon() }
        {props.children}
    </div>
  );
};


export default Modal;