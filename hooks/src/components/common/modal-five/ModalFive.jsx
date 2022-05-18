import React from 'react';

import App7 from '../../../tutorial/useEffect/1.-useEffect-basic';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useEffect Implementation</h1>
          </header>
          <div className="modal--body">
            <p>below are an Example how useEffect running their process with document title and interchange their value using useState</p>
            <p>Please notice the header on tab or open up console on Web Source to see the process</p>
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
