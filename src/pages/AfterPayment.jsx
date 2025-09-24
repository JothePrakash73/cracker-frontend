// // src/pages/AfterPayment.jsx
// import React, { useState } from 'react';
// import './AfterPayment.css';

// const API_BASE = process.env.REACT_APP_API || 'https://cracker-backend-b8ff.onrender.com/api';

// function AfterPayment() {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [place, setPlace] = useState('');
//   const [landmark, setLandmark] = useState('');
//   const [billFile, setBillFile] = useState(null);
//   const [screenshotFile, setScreenshotFile] = useState(null);
//   const [billNumber, setBillNumber] = useState('');

//   // Excel-like bill number generator
//   const generateBillNumber = (n) => {
//     let result = '';
//     while (n > 0) {
//       n--;
//       result = String.fromCharCode((n % 26) + 65) + result;
//       n = Math.floor(n / 26);
//     }
//     return result;
//   };

//   const validateFiles = () => {
//     if (!billFile || billFile.type !== 'application/pdf') {
//       alert('Please upload a valid PDF bill.');
//       return false;
//     }
//     if (!screenshotFile || !screenshotFile.type.startsWith('image/')) {
//       alert('Please upload a valid payment screenshot.');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateFiles()) return;

//     try {
//       // Get last bill index from backend
//       const lastRes = await fetch(`${API_BASE}/last-bill-number`);
//       const lastData = await lastRes.json();
//       const nextBillIndex = lastData?.lastBillIndex ? lastData.lastBillIndex + 1 : 1;
//       const newBillNumber = generateBillNumber(nextBillIndex);
//       setBillNumber(newBillNumber);

//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('phone', phone);
//       formData.append('place', place);
//       formData.append('landmark', landmark);
//       formData.append('bill', billFile);
//       formData.append('screenshot', screenshotFile);
//       formData.append('billNumber', newBillNumber);

//       const res = await fetch(`${API_BASE}/order-upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert(`✅ Order Submitted!\nBill Number: ${newBillNumber}`);
//         window.location.href = data.whatsappURL; // Redirect to WhatsApp
//       } else {
//         alert('❌ Upload failed. Please try again.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('❌ Error submitting order. Try again later.');
//     }
//   };

//   return (
//     <div className="after-payment-container">
//       <h2>Submit Your Order</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//         <label>Phone Number</label>
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

//         <label>Place</label>
//         <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />

//         <label>Landmark</label>
//         <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />

//         <label>Upload PDF Bill</label>
//         <input type="file" accept="application/pdf" onChange={(e) => setBillFile(e.target.files[0])} required />

//         <label>Upload Payment Screenshot</label>
//         <input type="file" accept="image/*" onChange={(e) => setScreenshotFile(e.target.files[0])} required />

//         {billNumber && (
//           <p className="bill-number-display">
//             Generated Bill Number: <b>{billNumber}</b>
//           </p>
//         )}

//         <button type="submit">Submit Order to WhatsApp</button>
//       </form>
//     </div>
//   );
// }

// export default AfterPayment;
