import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './forms/Login';
import Employeefunctions from './Employeefunctions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Login} />
		<Route exact path="/Employeedetails" component={Employeefunctions} />
      </div>
    );
  }
}

export default App;
