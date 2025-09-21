// src/components/CartDrawer.jsx
import React, { useRef } from 'react';
import CartItem from './CartItem';
import './CartDrawer.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function CartDrawer({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const billRef = useRef(null);

  // 80% OFF → You pay only 20%
  const DISCOUNT = 0.2;

  // ✅ Total payable (after 80% OFF)
  const total = cartItems.reduce((sum, item) => {
    return sum + (item.price * DISCOUNT) * item.quantity;
  }, 0);

  const handleDownloadBill = async () => {
    if (total < 2000) {
      alert('⚠️ Please order ₹2000 or above .');
      return;
    }

    const billElement = billRef.current;
    if (!billElement) return;

    billElement.style.display = 'block';
    await new Promise((resolve) => setTimeout(resolve, 300));

    try {
      const canvas = await html2canvas(billElement, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('CrackerMart_Bill.pdf');
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      billElement.style.display = 'none';
    }
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-button">&times;</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}  
                onRemoveFromCart={onRemoveFromCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>

        
          <div className="cart-drawer-summary">
            <h3 style={{ color: 'white' }}>
              Total (after 80% OFF): ₹{total.toFixed(2)}
            </h3>
            <button className="purchase-button" onClick={handleDownloadBill}>
              📄 Download Bill
            </button>
          </div>

          {/* Bill Preview for PDF */}
          <div
            ref={billRef}
            className="bill-preview"
            style={{
              padding: '20px',
              width: '210mm',
              background: 'white',
              color: 'black',
              fontSize: '14px',
              lineHeight: '1.6',
              display: 'none'
            }}
          >
            <h2 style={{ textAlign: 'center' }}>🧾 Sri Pathrakali Crackers Bill</h2>
            <p><strong>Date:</strong> {new Date().toLocaleDateString('en-IN')}</p>
            <hr />
            <table style={{ width: '100%', borderCollapse: 'collapse' }} border="1">
              <thead>
                <tr>
                  <th style={{ padding: '8px' }}>S.No</th>
                  <th style={{ padding: '8px' }}>Product Name</th>
                  <th style={{ padding: '8px' }}>Qty</th>
                  <th style={{ padding: '8px' }}>Original Price</th>
                  <th style={{ padding: '8px' }}>Discounted Price</th>
                  <th style={{ padding: '8px' }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const discountedPrice = item.price * DISCOUNT;
                  const subtotal = discountedPrice * item.quantity;
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: 'center', padding: '6px' }}>{index + 1}</td>
                      <td style={{ padding: '6px' }}>{item.name}</td>
                      <td style={{ textAlign: 'center', padding: '6px' }}>{item.quantity}</td>
                      <td style={{ textAlign: 'right', padding: '6px', textDecoration: 'line-through', color: 'red' }}>
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td style={{ textAlign: 'right', padding: '6px', color: 'green' }}>
                        ₹{discountedPrice.toFixed(2)}
                      </td>
                      <td style={{ textAlign: 'right', padding: '6px' }}>
                        ₹{subtotal.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <hr />
            <h3 style={{ textAlign: 'right', marginTop: '10px', color: 'green' }}>
              ✅ Total Payable (after 80% OFF): ₹{total.toFixed(2)}
            </h3>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p><strong>📱 Please scan and pay to confirm your order:</strong></p>
              <img
                src="/images/gpay-qr.png"
                alt="UPI QR Code"
                style={{ width: '180px', height: '180px', margin: '10px auto' }}
              />
              <p style={{ fontStyle: 'italic' }}>Payment via UPI is accepted.</p>
            </div>

            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              🎉 Thank you for shopping with <strong>Sri Pathrakali Crackers</strong>!
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartDrawer;
