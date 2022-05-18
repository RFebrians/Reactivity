import React from 'react';

import App7 from '../../../tutorial/conditional-rendering/1-multiple-returns'
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Conditional Rendering</h1>
          </header>
          <div className="modal--body">
            <p>After learn a Custom hooks to fetch , now we learn about Conditional Rendering</p>
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
