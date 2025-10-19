import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-4 py-4 sm:px-6 sm:py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3">
        {/* title + subtitle */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">Cinema Hall Booking</h1>
          <p className="text-xs sm:text-sm text-gray-200 mt-1">Select seats for your family and friends</p>
        </div>

        {/* small controls: badge on larger screens, compact button on mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center bg-gray-700 px-3 py-1 rounded text-sm">Sri Shanmuga A/C</div>

          {/* mobile-only button for quick actions (no JS behaviour here) */}
          <button
            type="button"
            className="inline-flex sm:hidden items-center px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-sm"
            aria-label="open actions"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
