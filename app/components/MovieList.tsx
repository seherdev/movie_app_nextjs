"use client";


import MovieCard from "../components/MovieCard";
import "tailwindcss"; //?
import "autoprefixer";//?




import { useEffect, useState } from "react";
import { Movie } from "../src/tpyes/types.ts";
import { fetchMovies } from "../lib/omdb";

type Props = {
  searchTerm: string;
};

export default function MovieList({ searchTerm }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
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
