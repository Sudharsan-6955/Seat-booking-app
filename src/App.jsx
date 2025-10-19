import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SeatGrid from './components/SeatGrid';
import BookingSummary from './components/BookingSummary';
import ColorPicker from './components/ColorPicker';
import Movielist from './pages/Movielist';

export default function App() {
  // rows A - H, seats 1 - 12
  const rows = useMemo(() => ['A','B','C','D','E','F','G','H'], []);
  const cols = useMemo(() => Array.from({length:12}, (_,i)=>i+1), []);

  // some pre-booked sample seats
  const [bookedSeats] = useState(new Set(['A1','A8','B3','C12','F5','G2']));
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [favoriteColor, setFavoriteColor] = useState('#22c55e'); // default green

  // new: currently chosen movie (null = show movie list)
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleSeat = (seatId) => {
    if (bookedSeats.has(seatId)) return;
    setSelectedSeats(prev => {
      const next = new Set(prev);
      if (next.has(seatId)) next.delete(seatId);
      else next.add(seatId);
      return next;
    });
  };

  // helper to map row to price and default color name
  const getRowInfo = (row) => {
    if (['A','B','C'].includes(row)) return { price: 150, colorClass: 'bg-sky-200', label: 'Regular' };
    if (['D','E','F'].includes(row)) return { price: 250, colorClass: 'bg-violet-200', label: 'Premium' };
    return { price: 350, colorClass: 'bg-amber-200', label: 'VIP' };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Header />
        <div className="p-6 md:p-10">
          {!selectedMovie ? (
            <Movielist onSelectMovie={setSelectedMovie} />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => { setSelectedMovie(null); setSelectedSeats(new Set()); }}
                      className="px-3 py-1 bg-gray-100 rounded"
                    >
                      ← Back to movies
                    </button>
                    <h3 className="text-lg font-semibold">{selectedMovie.title}</h3>
                  </div>

                  <ColorPicker favoriteColor={favoriteColor} setFavoriteColor={setFavoriteColor} />
                </div>

                <SeatGrid
                  rows={rows}
                  cols={cols}
                  bookedSeats={bookedSeats}
                  selectedSeats={selectedSeats}
                  toggleSeat={toggleSeat}
                  getRowInfo={getRowInfo}
                  favoriteColor={favoriteColor}
                  // pass movie if SeatGrid wants to show movie-specific info
                  selectedMovie={selectedMovie}
                />

                {/* legend */}
                <div className="mt-6 flex flex-wrap gap-4 items-center text-sm">
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded border bg-sky-200"></span> Regular (₹150)</div>
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded border bg-violet-200"></span> Premium (₹250)</div>
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded border bg-amber-200"></span> VIP (₹350)</div>
                  <div className="flex items-center gap-2"><span className="w-6 h-6 rounded border bg-gray-400"></span> Booked</div>
                </div>
              </div>

              <BookingSummary
                selectedSeats={Array.from(selectedSeats)}
                getRowInfo={getRowInfo}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
