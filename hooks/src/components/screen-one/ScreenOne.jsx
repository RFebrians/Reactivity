import React from 'react';

const ScreenOne = ({}) => {
  return (
    <main className="app--screen screen--one">
      <h2>useState Example</h2>
      <h5>The React useState Hook allows us to track state in a function component.</h5>
      <h5>State generally refers to data or properites that need to be tracking in an application.</h5>
      <h5>in a simple terms : <i>"useState will interact with your value"</i></h5>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Basic
        </button>
        <button type="button" data-modal="modal-two">
          Array
        </button>
        <button type="button" data-modal="modal-three">
          Object
        </button>
        <button type="button" data-modal="modal-four">
          Counter
        </button>
      </div>
    </main>
  );
};

export default ScreenOne;
