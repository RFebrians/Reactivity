import React from 'react';

const ScreenFive = ({}) => {
  return (
    <main className="app--screen screen--five">
      <h2>DOM Interaction</h2>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-fifteen">
          useRef
        </button>
        <button type="button" data-modal="modal-sixteen">
          useMemo/Callback
        </button>
      </div>
    </main>
  );
};

export default ScreenFive;
