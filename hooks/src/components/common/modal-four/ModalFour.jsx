import React from 'react';

import App7 from '../../../tutorial/useState/5.-useState-counter';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useState Counter Implementation</h1>
          </header>
          <div className="modal--body">
            <p>below are an Example how useState increase their value on counter</p>
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
