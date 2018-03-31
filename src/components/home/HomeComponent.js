import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {MenuContainer} from '../menu/MenuContainer';
import {routes} from '../routes';

export class HomeComponent extends Component {
  
  render() {
    return (
      <div>
        HOME
        
        <MenuContainer/>
      </div>
    );
  }
}
