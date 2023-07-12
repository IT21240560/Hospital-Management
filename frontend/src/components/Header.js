import React from "react";
import {Link} from 'react-router-dom';


function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark-blue sticky-nav">
        <a className="navbar-brand" href="/ManagePatient">
          <img src=".\sxs.png" width="94px" height="78px" alt=""/>
          </a>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ fontSize: "22px" }}>
            <li className="nav-item active">
              <Link to="/Home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">Create Patient</Link>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
            </li>
          </ul>
        </div>
        <style>
        {`
        // .navbar-brand{
        //   background-color: white;
        // }

        .navbar-dark-blue {
          background-color: #c0c6cf;
        }
       
      }
    `}
      </style>
      </nav>  
    )
}

export default Header;