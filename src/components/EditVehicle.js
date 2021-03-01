import React, { useState, useEffect } from 'react';

const EditVehicle = ({ location, history }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [constructionYear, setConstructionYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [picture, setPicture] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [count, setCount] = useState('');
  const [id, setId] = useState('');
  const [vehicles, setVehicles] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const vehicle = {
      brand,
      model,
      constructionYear,
      fuelType,
      numberOfSeats,
      picture,
      pricePerDay,
      count,
      id,
    };

    const newArr = vehicles.filter((el) => {
      return el.id !== id;
    });

    newArr.push(vehicle);

    localStorage.setItem('vehicles', JSON.stringify(newArr));

    history.push('/vehicles');
  };

  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem('vehicles'));
    if (vehicles) {
      setVehicles(vehicles);
    }

    setBrand(location.state.vehicle.brand);
    setModel(location.state.vehicle.model);
    setConstructionYear(location.state.vehicle.constructionYear);
    setFuelType(location.state.vehicle.fuelType);
    setNumberOfSeats(location.state.vehicle.numberOfSeats);
    setPicture(location.state.vehicle.picture);
    setId(location.state.vehicle.id);
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
                placeholder="brand"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="model"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="construction year"
                name="constructionYear"
                value={constructionYear}
                onChange={(e) => setConstructionYear(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="fuel type"
                name="fuelType"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="number of seats"
                name="numberOfSeats"
                value={numberOfSeats}
                onChange={(e) => setNumberOfSeats(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="picture"
                name="picture"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="price per day"
                name="pricePerDay"
                value={pricePerDay}
                onChange={(e) => setPricePerDay(e.target.value)}
              />
            </div>

            <div>
              <label></label>
              <input
                type="text"
                placeholder="count"
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>

            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVehicle;
