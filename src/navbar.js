import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (

        <div className='navi'>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
        <header className="box-shadow">
          <div className="section logo">
            <span className="white">TRAIN ENQUIRY </span><span className="green"> </span>
          </div>
          <div className="section">
            
              <li><Link to="/TrainGet">Get</Link></li>
              <li><Link to="/TrainPost">Post</Link></li>
              <li><Link to="/TrainUpdate">update</Link></li>
              <li><Link to="/TrainDelete">Delete</Link></li>
            
          </div>
        </header>
      </div>

    );
  }
export default Navbar;