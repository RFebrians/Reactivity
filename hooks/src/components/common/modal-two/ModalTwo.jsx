import React from 'react';

import App2 from '../../../tutorial/useState/3.-useState-array'
import Modal from '../modal/Modal';

const ModalTwo = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Interact with Array</h1>
          </header>
          <div className="modal--body">
            <p>useState will change your state value , and what about Array ?</p>
            <App2/>
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

export default ModalTwo;
