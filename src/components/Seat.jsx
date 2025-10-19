import React from 'react';

export default function Seat({ id, number, row, booked, selected, onToggle, colorClass, favoriteColor }) {
  const baseCls = 'w-9 h-9 md:w-11 md:h-11 rounded-md flex items-center justify-center text-sm md:text-base font-medium border';

  if (booked) {
    return (
      <button
        disabled
        className={`${baseCls} bg-gray-400 text-white border-gray-400 cursor-not-allowed`}
        title={`${row}${number} - booked`}
      >
        {number}
      </button>
    );
  }

  if (selected) {
    return (
      <button
        onClick={onToggle}
        className={`${baseCls} text-white`}
        style={{ backgroundColor: favoriteColor, borderColor: favoriteColor }}
        title={`${row}${number} - selected`}
      >
        {number}
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      className={`${baseCls} ${colorClass} text-gray-800 hover:opacity-90`}
      title={`${row}${number}`}
    >
      {number}
    </button>
  );
}
