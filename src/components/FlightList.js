import React, { useState } from 'react';

const FlightForm = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
   
  };

  return (
    <div>
      <h2>Uçak Bileti Arama</h2>
      <label>
        Nereden:
        <input type="text" value={fromCity} onChange={(e) => setFromCity(e.target.value)} />
      </label>
      <label>
        Nereye:
        <input type="text" value={toCity} onChange={(e) => setToCity(e.target.value)} />
      </label>
      <label>
        Kalkış Tarihi:
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      </label>
      <label>
        Dönüş Tarihi:
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default FlightForm;
