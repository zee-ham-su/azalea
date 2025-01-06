import React, { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import DonationHistory from './DonationHistory';

// Replace with your Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const DonateForm = ({ onClose, onEmailChange }: { onClose: () => void; onEmailChange: (email: string) => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('10');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // Update parent component when email changes
  React.useEffect(() => {
    onEmailChange(email);
  }, [email, onEmailChange]);

  const createPaymentIntent = async (amount: string) => {
    try {
      const response = await fetch('http://localhost:3001/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, email, name }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const data = await response.json();
      return data.clientSecret;
    } catch (err) {
      console.error('Error:', err);
      throw err;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin,
        },
        redirect: 'if_required',
      });

      if (submitError) {
        setError(submitError.message || 'An error occurred');
      } else {
        alert('Thank you for your donation!');
        onClose();
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Initialize payment intent when amount changes
  useEffect(() => {
    const initializePayment = async () => {
      try {
        const secret = await createPaymentIntent(amount);
        setClientSecret(secret);
      } catch (err) {
        setError('Failed to initialize payment');
      }
    };

    initializePayment();
  }, [amount]);

  if (!clientSecret) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Donation Amount ($)
        </label>
        <select
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        >
          <option value="10">$10</option>
          <option value="25">$25</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="custom">Custom Amount</option>
        </select>
      </div>

      <div>
        <PaymentElement />
      </div>

      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Donate Now'}
      </button>
    </form>
  );
};

export default function DonateModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showHistory, setShowHistory] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');

  if (!isOpen) return null;

  const options: StripeElementsOptions = {
    mode: 'payment' as const,
    amount: 1000,
    currency: 'usd',
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Make a Donation</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowHistory(true)}
                className="text-emerald-600 hover:text-emerald-700 text-sm"
              >
                View History
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <Elements stripe={stripePromise} options={options}>
            <DonateForm onClose={onClose} onEmailChange={setUserEmail} />
          </Elements>
        </div>
      </div>

      <DonationHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        email={userEmail}
      />
    </>
  );
}
