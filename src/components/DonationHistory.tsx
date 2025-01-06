import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface Donation {
  id: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  user: {
    name: string | null;
    email: string;
  };
}

interface DonationHistoryProps {
  email?: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function DonationHistory({ email, onClose, isOpen }: DonationHistoryProps) {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalDonated, setTotalDonated] = useState(0);

  useEffect(() => {
    const fetchDonations = async () => {
      if (!email) return;
      
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/donations/${encodeURIComponent(email)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch donations');
        }

        const data = await response.json();
        setDonations(data);
        
        // Calculate total successful donations
        const total = data
          .filter((donation: Donation) => donation.status === 'succeeded')
          .reduce((sum: number, donation: Donation) => sum + donation.amount, 0);
        setTotalDonated(total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (isOpen && email) {
      fetchDonations();
    }
  }, [email, isOpen]);

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'succeeded':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Donation History</h2>
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

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading donation history...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">{error}</p>
          </div>
        ) : donations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No donations found.</p>
          </div>
        ) : (
          <>
            <div className="bg-emerald-50 rounded-lg p-4 mb-6">
              <p className="text-emerald-800 font-medium">
                Total Donated: ${totalDonated.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">
                        ${donation.amount.toFixed(2)} {donation.currency.toUpperCase()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {format(new Date(donation.createdAt), 'PPpp')}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(donation.status)}`}>
                      {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
