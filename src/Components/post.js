import './post.css';
import React, { useState } from 'react';

function TrainPost() {
  const [trainNo, setTrainNo] = useState('');
  const [from_Station, setFrom_Station] = useState('');
  const [to_Station, setTo_Station] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      trainNo: trainNo,
      from_Station: from_Station,
      to_Station: to_Station,
      time: time,
      price: price
    };

    fetch('http://localhost:8080/train/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">TrainNo:</label>
        <input type="text" id="trainNo" name="trainNo" value={trainNo} onChange={event => setTrainNo(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">From_Station:</label>
        <input type="text" id="from" name="from" value={from_Station} onChange={event => setFrom_Station(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">To_Station:</label>
        <input type="text" id="to" name="to" value={to_Station} onChange={event => setTo_Station(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Time:</label>
        <input type="text" id="time" name="time" value={time} onChange={event => setTime(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={event => setPrice(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TrainPost;