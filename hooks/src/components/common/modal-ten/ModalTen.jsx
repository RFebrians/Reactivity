import React from 'react';

import App7 from '../../../tutorial/conditional-rendering/2-short-circuit'
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Toggler </h1>
          </header>
          <div className="modal--body">
            <p>below are an Example about Conditional Rendering interact with their values</p>
            <p>Possibilites : </p>
            <li>No Error</li>
            <li>Error</li>
            <App7 />
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;
