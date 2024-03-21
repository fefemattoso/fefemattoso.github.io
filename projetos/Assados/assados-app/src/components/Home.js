import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Home = () => {
  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Bem-vindo</h2>
      <Link to="/login" className="btn btn-primary">Login</Link>
    </div>
  );
};

export default Home;
