import React, { useState } from 'react';

const FlightSearchForm = ({ onSearch }) => {
 
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchCriteria = {
      fromCity,
      toCity,
      departureDate,
      returnDate
    };

    onSearch(searchCriteria);
  };

  return (
    <div>
      <h2>Uçak Bileti Arama</h2>
      {/* Form içeriği */}
    </div>
  );
};

export default FlightSearchForm;
