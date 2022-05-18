import React from 'react';

import App7 from '../../../tutorial/conditional-rendering/3-show-hide'
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Show/Hide on Conditional Rendering</h1>
          </header>
          <div className="modal--body">
            <p>below are an Example how we can show/hide the button using Conditional Rendering</p>
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
