import React from 'react';
import SkillDetails from '../pages/SkillDetails';
import '../styles/Skills.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';

const Skills = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Main />
        </Route>
        <Route path='/details' component={SkillDetails} />
      </Switch>
    </Router>
  );
};

export default Skills;
