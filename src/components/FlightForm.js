import React, { useState } from 'react';

const FlightForm = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [airlines, setAirlines] = useState([]);
  const [selectedAirline, setSelectedAirline] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [tcNo, setTcNo] = useState('');
  const [telNo, setTelNo] = useState('');
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    // Havayolu araması için gerekli işlemleri gerçekleştir
    const query = `SELECT * FROM flights WHERE fromCity='${fromCity}' AND toCity='${toCity}' AND departureDate='${departureDate}' AND returnDate='${returnDate}'`;
    // İşlem sonucunda uygun havayollarını airlines listesine ekle
    const mockAirlines = ['THY', 'Pegasus', 'AnadoluJet']; // Örnek havayolu listesi
    setAirlines(mockAirlines);
  };

  const handleAddToCart = () => {
    // Sepete ekleme işlemini gerçekleştir
    const selectedFlight = {
      fromCity,
      toCity,
      departureDate,
      returnDate,
      airline: selectedAirline,
      passengerName,
      tcNo,
      telNo,
      email,
    };
    setCart([...cart, selectedFlight]);
    console.log('Sepete Eklendi:', selectedFlight);
    // Saklama, print etme, PDF yapma gibi işlemler burada yapılabilir
  };

  return (
    <div>
      <h2>Uçak Bileti Arama ve Ödeme</h2>
      <h3>Uçak Bileti Arama</h3>
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

      <h3>Uçuş Listesi</h3>
      <ul>
        {airlines.map((airline) => (
          <li key={airline}>
            {airline}
            <button onClick={() => setSelectedAirline(airline)}>Seç</button>
          </li>
        ))}
      </ul>

      {selectedAirline && (
        <div>
          <h3>Yolcu Bilgileri</h3>
          <label>
            Ad Soyad:
            <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} />
          </label>
          <label>
            TC Kimlik No:
            <input type="text" value={tcNo} onChange={(e) => setTcNo(e.target.value)} />
          </label>
          <label>
            Telefon No:
            <input type="text" value={telNo} onChange={(e) => setTelNo(e.target.value)} />
          </label>
          <label>
            E-posta:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button onClick={handleAddToCart}>Sepete Ekle</button>
        </div>
      )}

      <h3>Sepet</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((flight, index) => (
            <li key={index}>
              {flight.fromCity} - {flight.toCity}, {flight.airline}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sepetiniz boş.</p>
      )}
    </div>
  );
};

export default FlightForm;
