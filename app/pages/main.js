'use client';

import React, { useEffect, useState } from 'react';
import Header from "../component/header";


export default function Main() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [apiUrl]);

    
    return (
        <>
        <Header></Header>
        <div className="mx-auto mt-0 bg-white text-white p-8 grid grid-cols-2 gap-4">
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div key={movie.id} className="bg-gray-800 shadow-md rounded-lg p-4 mb-6 flex">
                        <img
                            src={`${imageUrl}${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                            className="w-32 h-48 object-cover mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">{movie.title}</h3>
                            <p><strong>Release Date:</strong> {movie.release_date}</p>
                            <p><strong>Overview:</strong> {movie.overview}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </>
    );
    
}