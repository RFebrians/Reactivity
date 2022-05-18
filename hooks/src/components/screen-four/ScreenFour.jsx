import React from 'react';

const ScreenFour = ({}) => {
  return (
    <main className="app--screen screen--four">
      <h2>Props</h2>

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
      <br/>
      <div >
      <h2> useContext </h2>
      <h5>Conditional rendering is a method to render a different condition if it's true or false.</h5>
      </div>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-nine">
          Example 1
        </button>
        <button type="button" data-modal="modal-ten">
          Example 2
        </button>
        <button type="button" data-modal="modal-eleven">
          Example 3
        </button>
      </div>
      <br/>
      <div >
      <h2> useReducer & Inputs </h2>
      <h5>useReducer works like Redux</h5>
      </div>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-twelve">
          Implementation
        </button>
        <button type="button" data-modal="modal-thirteen">
          Inputs 1
        </button>
        <button type="button" data-modal="modal-fourteen">
          Inputs 2
        </button>
      </div>
    </main>
  );
};

export default ScreenFour;
