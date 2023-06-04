import React, { useState } from 'react';

const PaymentForm = ({ selectedFlight, onPaymentSubmit }) => {
  
  const [name, setName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentInfo = {
      name,
      creditCard,
      expiryDate
    };

    onPaymentSubmit(paymentInfo);
  };

  return (
    <div>
      <h2>Ödeme Bilgileri</h2>
      {/* Form içeriği */}
    </div>
  );
};

export default PaymentForm;
