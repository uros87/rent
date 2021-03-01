import React, { useState, useEffect } from 'react';

const EditCustomer = ({ location, history }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');

  const [customers, setCustomers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const customer = {
      fullName,
      email,
      phone,
      id,
    };

    const newArr = customers.filter((el) => {
      return el.id !== id;
    });

    newArr.push(customer);

    localStorage.setItem('customers', JSON.stringify(newArr));

    history.push('/customers');
  };

  useEffect(() => {
    const customers = JSON.parse(localStorage.getItem('customers'));
    if (customers) {
      setCustomers(customers);
    }

    setFullName(location.state.customer.fullName);
    setEmail(location.state.customer.email);
    setPhone(location.state.customer.phone);

    setId(location.state.customer.id);
  }, []);

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

export default EditCustomer;
