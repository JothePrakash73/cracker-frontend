// src/pages/AfterPayment.jsx
import React, { useState } from 'react';

function AfterPayment() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [landmark, setLandmark] = useState('');
  const [bill, setBill] = useState(null);
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('place', place);
    formData.append('landmark', landmark);
    formData.append('bill', bill);
    formData.append('screenshot', screenshot);

    const response = await fetch('http://localhost:5000/api/order-upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      const { whatsappURL } = data;
      window.location.href = whatsappURL; // Redirects to WhatsApp
    } else {
      alert('❌ ' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Upload Order Details</h2>
      <input placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <input placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} required />
      <input placeholder="Near Lorry Set (Landmark)" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />
      <label>Upload PDF Bill:</label>
      <input type="file" accept=".pdf" onChange={(e) => setBill(e.target.files[0])} required />
      <label>Upload Payment Screenshot:</label>
      <input type="file" accept="image/*" onChange={(e) => setScreenshot(e.target.files[0])} required />
      <button type="submit">📤 Submit to WhatsApp</button>
    </form>
  );
}

export default AfterPayment;
 