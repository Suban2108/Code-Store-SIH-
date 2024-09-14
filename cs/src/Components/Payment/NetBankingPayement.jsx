import React, { useState } from 'react';

const NetBankingPayment = () => {
  const [selectedBank, setSelectedBank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBank) {
      // Add payment processing logic here
      console.log("Selected Bank:", selectedBank);
      // Redirect to payment success/failure page
      window.location.href = '/payment-success';
    } else {
      alert("Please select a bank");
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
        <h2 className="text-2xl text-center mb-6 text-gray-800 font-semibold">Net Banking Payment</h2>

        {/* Bank Selection Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label htmlFor="bank" className="block text-gray-600 mb-2">Select Bank</label>
            <select
              id="bank"
              name="bank"
              required
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            >
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
              {/* Add more banks as needed */}
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

export default NetBankingPayment;
