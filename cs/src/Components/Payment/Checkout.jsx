import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const navigate = useNavigate();

  const submitForm = () => {
    if (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') {
      navigate('/CardPayment');
    } else if (paymentMethod === 'net_banking') {
      navigate('/NetBanking');
    } else if (paymentMethod === 'wallet') {
      navigate('/WalletPayment');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header */}
      

      {/* Container */}
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
        {/* Payment Header */}
        <h2 className="text-2xl text-center mb-6 text-gray-800 font-semibold">Checkout</h2>

        {/* Order Summary */}
        <div className="flex justify-between items-center pb-4 border-b-2 border-indigo-600 mb-6">
          <h3 className="text-lg text-gray-700 font-medium">Total Amount</h3>
          <p className="text-2xl text-gray-700 font-bold">$299.95</p>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-700 font-medium border-b-2 border-indigo-600 pb-2 mb-4">Select a Payment Method</h3>
          <form id="payment-form">
            <div className="mb-4">
              <input
                type="radio"
                id="credit-card"
                name="payment_method"
                value="credit_card"
                checked={paymentMethod === 'credit_card'}
                onChange={() => setPaymentMethod('credit_card')}
                className="mr-2"
              />
              <label htmlFor="credit-card" className="text-gray-700">Credit Card</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="debit-card"
                name="payment_method"
                value="debit_card"
                checked={paymentMethod === 'debit_card'}
                onChange={() => setPaymentMethod('debit_card')}
                className="mr-2"
              />
              <label htmlFor="debit-card" className="text-gray-700">Debit Card</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="net-banking"
                name="payment_method"
                value="net_banking"
                checked={paymentMethod === 'net_banking'}
                onChange={() => setPaymentMethod('net_banking')}
                className="mr-2"
              />
              <label htmlFor="net-banking" className="text-gray-700">Net Banking</label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="wallet"
                name="payment_method"
                value="wallet"
                checked={paymentMethod === 'wallet'}
                onChange={() => setPaymentMethod('wallet')}
                className="mr-2"
              />
              <label htmlFor="wallet" className="text-gray-700">Wallet</label>
            </div>
            <button
              type="button"
              onClick={submitForm}
              className="w-full py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-500 transition duration-200"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Back to Cart */}
        <a href="/cart" className="block text-center text-gray-600 hover:underline mt-4">
          Back to Cart
        </a>
      </div>
    </div>
  );
};

export default Checkout;
