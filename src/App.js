import './App.css';
import React from "react";

// import Navbar from './Components/navbar';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import TrainUpdate from './Components/update';
import Trainget from './Components/get';
import TrainPost from './Components/post';
import TrainDelete from './Components/delete';
import Navbar from './navbar';

function Home() {
    return (

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/TrainGet" element={<Trainget/>}/>
          <Route path="/TrainPost" element={<TrainPost />}></Route>
          <Route path="/TrainUpdate" element={<TrainUpdate/>}/>
          <Route path="/TrainDelete" element={<TrainDelete />}/>
        </Routes>
      </BrowserRouter>
    );

}
export default Home;