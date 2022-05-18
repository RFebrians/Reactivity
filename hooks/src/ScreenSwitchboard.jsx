import React from 'react';
import { Route, Switch } from 'react-router-dom';

// your route here
import ScreenOne from './components/screen-one/ScreenOne';
import ScreenTwo from './components/screen-two/ScreenTwo';
import ScreenThree from './components/screen-three/ScreenThree';
import ScreenFour from './components/screen-four/ScreenFour';
import ScreenFive from './components/screen-five/screen-five';
import ScreenAbout from './components/screen-about/screen-about';

const ScreenSwitchboard = () => {
  return (
    <Switch>
      <Route path="/screen-about">
        <ScreenAbout />
      </Route>
      <Route path="/screen-five">
        <ScreenFive />
      </Route>
      <Route path="/screen-four">
    <ScreenFour />
      </Route>
      <Route path="/screen-three">
        <ScreenThree />
      </Route>
      <Route path="/screen-two">
        <ScreenTwo />
      </Route>
      <Route path="/screen-one">
        <ScreenOne />
      </Route>
      <Route exact path="/">
        <ScreenOne />
      </Route>
    </Switch>
  );
};

export default ScreenSwitchboard;
