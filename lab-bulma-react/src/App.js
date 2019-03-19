import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import Button from './components/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          textNav="Home"
          btnLogin="Login"
          btnSignup="Signup"/>
        <FormField  
          type="text" 
          placeholder="e.g Alex Smith"/>
        <FormField 
          type="email" 
          placeholder="e.g. alexsmith@gmail.com"/>
        <Button is-danger/>
        
      </div>
    );
  }
}

export default App;
