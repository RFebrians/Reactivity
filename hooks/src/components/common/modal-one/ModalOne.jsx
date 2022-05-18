import React from 'react';

import App2 from '../../../tutorial/useState/2.-useState-basic';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useState Implementation</h1>
          </header>
          <div className="modal--body">
            <p>below are an Example how useState change their value</p>
            <App2 />
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
