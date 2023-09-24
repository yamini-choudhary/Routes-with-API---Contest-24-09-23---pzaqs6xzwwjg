import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top'; // Import the Top component
import Contact from './Contact';

const App = () => {
  const [cryptoArr, setCryptoArr] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it in the state
    fetch('https://api.coinlore.net/api/tickers/')
      .then(response => response.json())
      .then(data => setCryptoArr(data.data.slice(0, 10))) // Get the first 10 cryptos
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="main">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-10" element={<Top cryptoArr={cryptoArr} />} /> {/* Pass cryptoArr as a prop to Top */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
