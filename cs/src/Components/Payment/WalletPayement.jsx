import React, { useState } from 'react';

const WalletPayment = () => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedWallet) {
      // Add payment processing logic here
      console.log("Selected Wallet:", selectedWallet);
      // Redirect to payment success/failure page
      window.location.href = '/payment-success';
    } else {
      alert("Please select a wallet");
    }
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
        <h2 className="text-2xl text-center mb-6 text-gray-800 font-semibold">Wallet Payment</h2>

        {/* Wallet Selection Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label htmlFor="wallet" className="block text-gray-600 mb-2">Select Wallet</label>
            <select
              id="wallet"
              name="wallet"
              required
              value={selectedWallet}
              onChange={(e) => setSelectedWallet(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select Wallet</option>
              <option value="wallet1">Wallet 1</option>
              <option value="wallet2">Wallet 2</option>
              <option value="wallet3">Wallet 3</option>
              {/* Add more wallets as needed */}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-500 transition duration-200"
          >
            Proceed to Payment
          </button>
        </form>

        {/* Back to Checkout Link */}
        <a href="/checkout" className="block text-center text-gray-600 hover:underline mt-6">
          Back to Checkout
        </a>
      </div>
    </div>
  );
};

export default WalletPayment;
