import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddVehicle = ({ history }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [constructionYear, setConstructionYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');
  const [picture, setPicture] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [count, setCount] = useState('');

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem('vehicles'));
    if (vehicles) {
      setVehicles(vehicles);
    }
  }, []);

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
      id: uuidv4(),
    };

    vehicles.push(vehicle);

    localStorage.setItem('vehicles', JSON.stringify(vehicles));
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

export default AddVehicle;
