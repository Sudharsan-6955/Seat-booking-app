import React from 'react';
import Poster1 from '../assets/Movie1.jpg'; // <-- import poster(s)
import Poster2 from '../assets/Movie2.jpg';
import Poster3 from '../assets/Movie3.jpg';
import Poster4 from '../assets/Movie4.jpg';
import Poster5 from '../assets/Movie5.jpg';
import Poster6 from '../assets/Movie6.jpg';
import Poster7 from '../assets/Movie7.jpg';
import Poster8 from '../assets/Movie8.jpg';

export default function Movielist({ onSelectMovie }) {
    const movies = [
        { id: 'm1', title: 'Midway', duration: '2h 10m', rating: 'PG-13', image: Poster1 },
        { id: 'm2', title: 'F1- Drive to Survive', duration: '1h 50m', rating: 'PG', image: Poster2 }, 
        { id: 'm3', title: 'Madarasi', duration: '2h 5m', rating: 'R', image: Poster3 },
        { id: 'm4', title: 'THE IMPOSSIBLE', duration: '3h 40m', rating: 'PG-13', image: Poster4 },
        { id: 'm5', title: 'LAND of MINE', duration: '2h 40m', rating: 'PG', image: Poster5 },
        { id: 'm6', title: 'THE GRAVITY', duration: '2h 10m', rating: 'PG', image: Poster6 },
        { id: 'm7', title: '96 Life of Ram', duration: '2h 20m', rating: 'PG', image: Poster7 },
        { id: 'm8', title: 'STOP THE WAR', duration: '1h 54m', rating: 'PG-1', image: Poster8 },
    ];

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Now showing</h2>
                <p className="text-sm text-gray-600">Choose a movie to select seats</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map(movie => (
                    <div key={movie.id} className="border rounded p-4 flex flex-col">
                        {movie.image ? (
                            <img src={movie.image} alt={`${movie.title} poster`} className="h-40 w-full rounded mb-3 object-cover" />
                        ) : (
                            <div className="h-40 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                                Poster
                            </div>
                        )}

                        <div className="flex-1">
                            <h3 className="font-medium">{movie.title}</h3>
                            <p className="text-sm text-gray-500">{movie.duration} • {movie.rating}</p>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => onSelectMovie(movie)}
                                className="w-full px-3 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                            >
                                Select seats
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
