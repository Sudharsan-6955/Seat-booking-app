import React from 'react';
import Seat from './Seat';

export default function SeatGrid({ rows, cols, bookedSeats, selectedSeats, toggleSeat, getRowInfo, favoriteColor }) {
  return (
    <div>
      <div className="text-center text-sm text-gray-500 mb-4">SCREEN</div>
      <div className="space-y-3">
        {rows.map(row => (
          <div key={row} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {/* row label */}
            <div className="w-full sm:w-6 text-sm font-medium text-center sm:text-left">{row}</div>

            {/* mobile: compact grid (6 cols) */}
            <div className="w-full sm:hidden">
              <div className="grid grid-cols-6 gap-2">
                {cols.map(num => {
                  const id = `${row}${num}`;
                  const info = getRowInfo(row);
                  return (
                    <Seat
                      key={id}
                      id={id}
                      number={num}
                      row={row}
                      price={info.price}
                      booked={bookedSeats.has(id)}
                      selected={selectedSeats.has(id)}
                      onToggle={() => toggleSeat(id)}
                      colorClass={info.colorClass}
                      favoriteColor={favoriteColor}
                    />
                  );
                })}
              </div>
            </div>

            {/* desktop / tablet: original left and right blocks */}
            <div className="hidden sm:flex sm:flex-1 sm:justify-between sm:items-center">
              {/* left block seats 1-6 */}
              <div className="flex gap-2">
                {cols.slice(0,6).map(num => {
                  const id = `${row}${num}`;
                  const info = getRowInfo(row);
                  return (
                    <Seat
                      key={id}
                      id={id}
                      number={num}
                      row={row}
                      price={info.price}
                      booked={bookedSeats.has(id)}
                      selected={selectedSeats.has(id)}
                      onToggle={() => toggleSeat(id)}
                      colorClass={info.colorClass}
                      favoriteColor={favoriteColor}
                    />
                  );
                })}
              </div>

              {/* center spacer */}
              <div className="w-8"></div>

              {/* right block seats 7-12 */}
              <div className="flex gap-2">
                {cols.slice(6).map(num => {
                  const id = `${row}${num}`;
                  const info = getRowInfo(row);
                  return (
                    <Seat
                      key={id}
                      id={id}
                      number={num}
                      row={row}
                      price={info.price}
                      booked={bookedSeats.has(id)}
                      selected={selectedSeats.has(id)}
                      onToggle={() => toggleSeat(id)}
                      colorClass={info.colorClass}
                      favoriteColor={favoriteColor}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
