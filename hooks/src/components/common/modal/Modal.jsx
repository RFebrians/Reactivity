import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT Note : please don't change code directly , Legacy Code

const modalRootEl = document.getElementById('modal-root');

const Modal = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, modalRootEl);
};

export default Modal;
