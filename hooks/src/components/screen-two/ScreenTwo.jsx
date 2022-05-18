import React from 'react';

const ScreenTwo = () => {
  return (
    <main className="app--screen screen--two">
      <h2>useEffect Example </h2>
      <h5>The useEffect Hook allows you to perform side effects(process) in your components.</h5>
      <h5>i.e : fetching data, directly updating the DOM, and timers.</h5>
      <h5>useEffect accepts two arguments. The second argument is optional. </h5>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-five">
          Basic
        </button>
        <button type="button" data-modal="modal-six">
          Process
        </button>
        <button type="button" data-modal="modal-seven">
          Fetch
        </button>
      </div>
    </main>
  );
};

export default ScreenTwo;
