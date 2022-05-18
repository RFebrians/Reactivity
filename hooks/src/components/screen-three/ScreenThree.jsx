import React from 'react';

const ScreenThree = () => {
  return (
    <main className="app--screen screen--three">
      <h2>Custom Hooks</h2>
      <h5>Custom hooks allow us to have cleaner functional components and prevent code duplication by bringing common use cases to reusable hooks.</h5>
      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-eight">
          Fetch with Custom Hook
        </button>
      </div>
      <br/>
      <div >
      <h2> Conditional Rendering </h2>
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
    </main>
  );
};

export default ScreenThree;
