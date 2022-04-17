import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFireBase/UseFirebase';

const Navbar = () => {
  const {user,logOut}=useFirebase()
  console.log(user)
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Online Tutor choice</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">blog</Link>
              </li>
            
              {
                user.email ? <button onClick={logOut}>{user.displayName} log-out</button> : <Link className="nav-link" to="/login">login</Link>
              }
             
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;