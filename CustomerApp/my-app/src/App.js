import React, { Component }from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainers from './containers/HomeContainers';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  renderCustomers = () => <h1>Customers</h1>;
  renderCustomerWithDNI = () => <h1> This is a customer with DNI</h1>;
  renderNewCustomer = () => <h1> This is a new customer </h1>;
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainers}></Route>
          <Route exact path="/customers" component={CustomersContainer}></Route>
          <Switch>
            <Route path="/customers/new" component={this.renderNewCustomer}></Route>
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}></Route>
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;
