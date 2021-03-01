import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RentACar = () => {
  const [vehicles, setVehicles] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [searchCustomer, setSearchCustomer] = useState('');
  const [searchVehicle, setSearchVehicle] = useState('');

  const getCustomer = () => {
    customers.filter((customer) => {
      console.log(customer.fullName.match(searchCustomer));
      return customer.fullName.match(searchCustomer);
    });
  };

  const getVehicle = () => {
    vehicles.filter((vehicle) => {
      console.log(vehicle.model.match(searchVehicle));
      return vehicle.model.match(searchVehicle);
    });
  };

  const rentACar = (searchCustomer, searchVehicle, startDate, endDate) => {};

  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem('vehicles'));
    if (vehicles) {
      setVehicles(vehicles);
    }

    const customers = JSON.parse(localStorage.getItem('customers'));
    if (customers) {
      setCustomers(customers);
    }

    // console.log(vehicles);
  }, []);

  useEffect(getCustomer, [searchCustomer]);
  useEffect(getVehicle, [searchVehicle]);

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(searchCustomer, searchVehicle, startDate, endDate);

    rentACar(searchCustomer, searchVehicle, startDate, endDate);
  };

  return (
    <div>
      <div>
        <Link to="/vehicles/add"></Link>
      </div>

      {vehicles.map((vehicle) => (
        <div>
          <Link
            key={vehicle.id}
            to={{
              pathname: `/vehicles/${vehicle.id}/edit`,
              state: { vehicle },
            }}
          >
            {vehicle.id}
          </Link>
        </div>
      ))}

      <hr />
      {customers.map((customer) => (
        <div>
          <Link
            key={customer.id}
            to={{
              pathname: `/customers/${customer.id}/edit`,
              state: { customer },
            }}
          >
            {customer.id}
          </Link>
        </div>
      ))}
      <form onSubmit={submitHandler} enctype="multipart/form-data">
        <div>
          <label></label>
          <input
            type="text"
            placeholder="Search customer"
            name="searchCustomer"
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            placeholder="Search vehicle"
            name="searchVehicle"
            value={searchVehicle}
            onChange={(e) => setSearchVehicle(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <input
            type="date"
            placeholder="Start date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label></label>
          <input
            type="date"
            placeholder="End date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RentACar;
