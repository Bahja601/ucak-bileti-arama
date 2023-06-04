import React, { useState } from "react";
import './App.css';

const cities = ["istanbul", "ankara", "izmir", "antalya"];

const airlines = ["thy", "pegasus", "anadolujet"];

const App = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [airline, setAirline] = useState("");
  const [flights, setFlights] = useState([]);
  const [passengerName, setPassengerName] = useState("");
  const [tcNo, setTcNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [cart, setCart] = useState([]);

  const searchFlights = () => {

    const filteredFlights = [
      {
        id: 1,
        airline: "THY",
        origin: "Istanbul",
        destination: "Ankara",
        departureTime: "09:00",
        arrivalTime: "10:30",
        flightNumber: "TK101",
        flightDuration: "1h 30m",
        price: 250,
        date: "2023-06-03",
      },
      {
        id: 2,
        airline: "Pegasus",
        origin: "Izmir",
        destination: "Antalya",
        departureTime: "12:00",
        arrivalTime: "13:30",
        flightNumber: "PC202",
        flightDuration: "1h 30m",
        price: 150,
        date: "2023-06-04",
      },
      {
        id: 3,
        airline: "AnadoluJet",
        origin: "Ankara",
        destination: "Izmir",
        departureTime: "15:00",
        arrivalTime: "16:30",
        flightNumber: "AJ303",
        flightDuration: "1h 30m",
        price: 180,
        date: "2023-06-05",
      },
    ];

    setFlights(filteredFlights);
  };

  const addToCart = (flight) => {
    setCart((prevCart) => [...prevCart, flight]);
  };

  const handlePayment = () => {

    setCart([]);
  };

  const generateBoardingPass = () => {

    const boardingPassInfo = {
      passengerName,
      flightDetails: cart.map((flight) => ({
        origin: flight.origin,
        destination: flight.destination,
        startDate: flight.date,
        airline: flight.airline,
      })),
    };


    console.log("Biniş kartı oluşturuldu!");
  };


  return (
    <div className="container">
      <h1 className="title">Uçak Bileti Rezervasyonu</h1>

      <div className="section">
        <h2 className="section-title">Yolculuk Detayları</h2>
        <div className="form-group">
          <label htmlFor="origin">Nereden</label>
          <select
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            <option value="">Nereden</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="destination">Nereye</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Nereye</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Başlangıç Tarihi</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">Bitiş Tarihi</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="airline">Havayolu</label>
          <select
            id="airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
          >
            <option value="">Havayolu</option>
            {airlines.map((airline) => (
              <option key={airline} value={airline}>
                {airline}
              </option>
            ))}
          </select>
        </div>

        <button className="button primary" onClick={searchFlights}>
          Uçuş Ara
        </button>
      </div>

      <div className="section">
        <h2 className="section-title">Uçuşlar</h2>
        {flights.map((flight) => (
          <div className="flight" key={flight.id}>
            <p>
              {flight.origin} - {flight.destination}
            </p>
            <p>Tarih: {flight.date}</p>
            <p>Havayolu: {flight.airline}</p>
            <button className="button" onClick={() => addToCart(flight)}>
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Ödeme</h2>
        <div className="form-group">
          <input
            type="text"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            placeholder="İsim Soyisim"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            value={tcNo}
            onChange={(e) => setTcNo(e.target.value)}
            placeholder="TC Kimlik Numarası"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Telefon Numarası"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta Adresi"
          />
        </div>

        <button className="button primary" onClick={handlePayment}>
          Ödeme Yap
        </button>
      </div>

      <div className="section">
        <h2 className="section-title">Sepet</h2>
        {cart.map((flight) => (
          <div className="flight" key={flight.id}>
            <p>
              {flight.origin} - {flight.destination}
            </p>
            <p>Tarih: {flight.date}</p>
            <p>Havayolu: {flight.airline}</p>
          </div>
        ))}
        <button className="button" onClick={generateBoardingPass}>
          Biniş Kartı Oluştur
        </button>
      </div>
    </div>
  );
};

export default App;
