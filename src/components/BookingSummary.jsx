import React, { useMemo } from 'react';

export default function BookingSummary({ selectedSeats = [], getRowInfo }) {
  const total = useMemo(() => {
    return selectedSeats.reduce((sum, seatId) => {
      const row = seatId.charAt(0);
      const info = getRowInfo(row);
      return sum + (info?.price || 0);
    }, 0);
  }, [selectedSeats, getRowInfo]);

  const prettyList = selectedSeats.sort().join(', ');

  return (
    <aside className="bg-gray-50 p-4 rounded-md border">
      <h3 className="text-xl font-bold mb-3">Booking Summary</h3>
      <div className="text-sm text-gray-700 mb-2"><span className="font-medium">Selected Seats:</span> {prettyList || '—'}</div>
      <div className="text-sm text-gray-700 mb-2"><span className="font-medium">Number of Seats:</span> {selectedSeats.length}</div>
      <div className="text-lg font-bold text-green-600">Total: ₹{total}</div>
      <button className="mt-4 w-full py-2 bg-green-600 text-white rounded hover:opacity-95 disabled:opacity-60" disabled={selectedSeats.length===0}>
        Proceed to Pay
      </button>
    </aside>
  );
}
