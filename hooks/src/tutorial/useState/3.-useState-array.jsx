import React from 'react';
import { data } from '../../data';

// dibawah ini adalah contoh penggunaan component UseStateArray
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className="App">
      <h1> 3. useState Array</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <br />
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
