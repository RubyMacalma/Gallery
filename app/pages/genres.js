'use client';

import React, { useEffect, useState } from 'react';
import Header from "../component/header";

export default function Genres() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    const moviesApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=`;
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await fetch(genresApiUrl);
            const data = await response.json();
            setGenres(data.genres);

            const actionGenre = data.genres.find(genre => genre.name === "Action");
            if (actionGenre) {
                setSelectedGenre(actionGenre.id);
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    const fetchMovies = async (genreId) => {
        try {
            const response = await fetch(`${moviesApiUrl}${genreId}`);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchGenres();
    }, [genresApiUrl]);

    useEffect(() => {
        if (selectedGenre) {
            fetchMovies(selectedGenre);
        }
    }, [selectedGenre]);

    return (
        <>
            <Header />
            <div className=" mx-auto mt-0 bg-white text-black p-8">
                <h1 className="text-3xl font-bold">Genres</h1>
                {genres.length > 0 ? (
                    <div className="mt-4 grid grid-cols-2 gap-1">
                        {genres.map(genre => (
                            <button
                                key={genre.id}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer border border-gray-300 text-sm"
                                onClick={() => setSelectedGenre(genre.id)}
                            >
                                {genre.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>Loading genres...</p>
                )}

                {selectedGenre && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">Movies</h2>
                        {movies.length > 0 ? (
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                {movies.map(movie => (
                                    <div key={movie.id} className="bg-gray-800 shadow-md rounded-lg p-4 mb-6 flex">
                                        <img
                                            src={`${imageUrl}${movie.poster_path}`}
                                            alt={`${movie.title} Poster`}
                                            className="w-32 h-48 object-cover mr-4" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{movie.title}</h3>
                                            <p className="text-white"><strong>Release Date:</strong> {movie.release_date}</p>
                                            <p className="text-white"><strong>Overview:</strong> {movie.overview}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>Loading movies...</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
