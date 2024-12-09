'use client';

import React, { useEffect, useState } from 'react';
import Header from "../component/header";

export default function Trending() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);

    const fetchTrendingMovies = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchTrendingMovies();
    }, [apiUrl]);

    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold  text-black mt-6 ">Trending Movies</h1>
            <div className=" grid grid-cols-2 gap-4 mx-auto mt-0 bg-white text-white p-8 " >
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <div key={movie.id} className="bg-gray-800 shadow-md rounded-lg p-4 mb-6 flex">
                            <img 
                                src={`${imageUrl}${movie.poster_path}`} 
                                alt={`${movie.title} Poster`} 
                                className="w-32 h-48 object-cover mr-4"
                            />
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