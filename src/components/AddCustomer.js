import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddCustomer = ({ history }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const customers = JSON.parse(localStorage.getItem('customers'));
    if (customers) {
      setCustomers(customers);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const customer = {
      fullName,
      email,
      phone,
      id: uuidv4(),
    };

    customers.push(customer);

    localStorage.setItem('customers', JSON.stringify(customers));
    history.push('/cards');
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler} enctype="multipart/form-data">
          <div>
            <div>
              <label></label>
              <input
                type="text"
                placeholder="full name"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
