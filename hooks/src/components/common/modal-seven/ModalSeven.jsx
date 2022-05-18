import React from 'react';

import App7 from '../../../tutorial/useEffect/3.-useEffect-fetch';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useEffect Fetch</h1>
          </header>
          <div className="modal--bodyscroll">
            <p>below are an Example how useEffect interaction with Data from API</p>
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
