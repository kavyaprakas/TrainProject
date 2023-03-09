import './get.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Trainget() {
 
    const [trains, setTrain] = useState([]);
 
    useEffect(() => {
        axios.get(`http://localhost:8080/train`)
            .then(response => {
                setTrain(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);
 
    return (
        <div>
            <h1>Train Schedule</h1>
            <table>
                <thead>
                    <tr>
                        <th>TrainNo</th>
                        <th>From_Station</th>
                        <th>To_Station</th>
                        <th>Time</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map(train => (
                        <tr key={train.trainNo}>
                            <td>{train.trainNo}</td>
                            <td>{train.from_Station}</td>
                            <td>{train.to_Station}</td>
                            <td>{train.time}</td>
                            <td>{train.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default Trainget;