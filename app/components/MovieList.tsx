"use client";

type Props = {
  searchTerm: string;
};

import MovieCard from "./MovieCard";
import "tailwindcss"; //?
import "autoprefixer";//?

//src\types
//movie_app_nextjs\src\types

import { useEffect, useState } from "react";
import { data } from "@/src/types/types";
import { fetchMovies } from "@/src/lib/omdb";



export default function MovieList({ searchTerm }: Props) {
  const [movies, setMovies] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const data = await fetchMovies(searchTerm);
      if (data) setMovies(data);
      setLoading(false);
    }

    if (searchTerm) {
      loadMovies();
    }
  }, [searchTerm]);

  if (loading) return <p className="text-center">Loading...</p>;

  if (movies.length === 0)
    return <p className="text-center text-gray-500">No results found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
