import React from 'react';
import { NavLink } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="app--footer">
      <p className="copyright">&copy; 2022 React Implementation | <NavLink to="/screen-about">About</NavLink></p>
    </footer>
  );
};

export default AppFooter;
