import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {
  const [top10Crypto, setTop10Crypto] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it in the state
    fetch('https://api.coinlore.net/api/tickers/')
      .then(response => response.json())
      .then(data => setTop10Crypto(data.data.slice(0, 10))) // Get the first 10 cryptos
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="main">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-10" element={<Top top10Crypto={top10Crypto} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
