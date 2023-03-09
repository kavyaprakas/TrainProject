import React, { useState } from 'react';
import axios from 'axios';
import './delete.css';

const TrainDelete = () => {
  const [train_no, setTrainNo] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete/${train_no}`)
      .then(response => {
        alert('deleted successfully!');
        setTrainNo('');
         
      })
      .catch(error => {
        alert('Failed to delete');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Delete Train Details</h1>
      <form>
        <div>
          <label htmlFor="train_no">TrainNo:</label>
          <input
            type="text"
            id="TrainNo"
            value={train_no}
            onChange={event => setTrainNo(event.target.value)}
          />
        </div>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default TrainDelete;