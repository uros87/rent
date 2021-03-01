import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem('vehicles'));
    if (vehicles) {
      setVehicles(vehicles);
    }

    const customers = JSON.parse(localStorage.getItem('customers'));
    if (customers) {
      setCustomers(customers);
    }

    console.log(vehicles);
  }, []);
  return (
    <div>
      <div>
        <Link to="/vehicles/add">

        </Link>
      </div>

      {vehicles.map((vehicle) => (
        <div>
          <Link
            key={vehicle.id}
            to={{
              pathname: `/vehicles/${vehicle.id}/edit`,
              state: { vehicle },
            }}
          >{vehicle.id}
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
          >{customer.id}
          </Link>
        </div>
      ))}

      <hr />
      Rent a car
      <select></select>
    </div>
  );
};

export default Home;
