import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app--header">
      <h1>React Hooks Implementation</h1>
      <nav className="app--nav">
        <NavLink to="/screen-one">State</NavLink>
        <NavLink to="/screen-two">Effect</NavLink>
        <NavLink to="/screen-three">Custom Hooks</NavLink>
        | | |
        <NavLink to="/screen-four">Context</NavLink>
        <NavLink to="/screen-five">DOM Interaction</NavLink>
        | | |
        <NavLink to="/screen-five">Glossary</NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
