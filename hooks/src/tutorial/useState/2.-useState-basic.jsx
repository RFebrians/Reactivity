import React, { useState } from 'react';

//import './styles.css';

/* Sebuah Component diawali dengan Huruf Kapital
sedangkan useState hooks menggunakan camelCase
dibawah ini merupakan bagaimana useState hooks bekerja  */

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  // useState menggunakan 2 array
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('i am changed');
    } else {
      setText('change title');
    }
  };

  return (
    <div className="App">
      <h1> 2. useState Implementation </h1>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </div>
  );
};

export default UseStateBasics;
