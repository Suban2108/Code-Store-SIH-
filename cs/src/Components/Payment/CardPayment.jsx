import React, { useState } from 'react';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVV:", cvv);
    // Redirect to payment success/failure page
    window.location.href = '/payment-success';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="mb-8">
        <img src="path-to-your-logo/logo.png" alt="Code Store Logo" className="w-40" />
      </div>

      {/* Container */}
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
        {/* Payment Header */}
        <h2 className="text-2xl text-center mb-6 text-gray-800 font-semibold">Credit/Debit Card Payment</h2>

        {/* Payment Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label htmlFor="card-number" className="block text-gray-600 mb-2">Card Number</label>
            <input
              type="text"
              id="card-number"
              name="card_number"
              placeholder="Enter card number"
              required
              maxLength="19"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="expiry-date" className="block text-gray-600 mb-2">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              name="expiry_date"
              placeholder="MM/YY"
              required
              pattern="\d{2}/\d{2}"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="cvv" className="block text-gray-600 mb-2">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="Enter CVV"
              required
              maxLength="4"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-500 transition duration-200"
          >
            Proceed to Payment
          </button>
        </form>

        {/* Back to Checkout */}
        <a href="/checkout" className="block text-center text-gray-600 hover:underline mt-6">
          Back to Checkout
        </a>
      </div>
    </div>
  );
};

export default CardPayment;
