import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import AddVehicle from './components/AddVehicle';
import EditVehicle from './components/EditVehicle';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import RentACar from './components/RentACar'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path="/home" component={Home} exact />
        <Route path="/vehicles/add" component={AddVehicle} />
        <Route path="/vehicles/:id/edit" component={EditVehicle} />
        <Route path="/customers/add" component={AddCustomer} />
        <Route path="/customers/:id/edit" component={EditCustomer} />
        <Route path="/rent" component={RentACar} />

      </Fragment>
    </Router>
  );
};

export default App;
