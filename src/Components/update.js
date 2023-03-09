import React, { useState } from "react";
import axios from "axios";
import './update.css';

function TrainUpdate() {
  const [train, setTrain] = useState({
    trainNo: "",
    from_Station: "",
    to_Station: "",
    time: "",
    price: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setTrain({ ...train, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8080/update', train).then((res) => {
      console.log(res.data);
      // setTrain({ train_no: "", from_station: "", to_station: "",time: "",price: "" });
    });
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <label>
          TrainNo:
        </label>
          <input type="text" name="trainNo" value={train.trainNo} onChange={handleChange} />
        
        <label>
          From_Station:
        </label>
          <input type="text" name="from_Station" value={train.from_Station} onChange={handleChange} />
        <label>
          To_Station:
        </label>
        <input type="text" name="to_Station" value={train.to_Station} onChange={handleChange} />
        <label>
          Time:
          <input type="text" name="time" value={train.time} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={train.price} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default TrainUpdate;