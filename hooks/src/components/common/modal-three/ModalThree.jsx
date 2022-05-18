import React from 'react';

import App4 from '../../../tutorial/useState/4.-useState-object';
import Modal from '../modal/Modal';

const ModalThree = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useState Object</h1>
          </header>
          <div className="modal--body">
            <p>Modal Three content will be rendered here.</p>
            <App4/>
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

export default ModalThree;
