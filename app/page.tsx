// src/app/page.tsx

import "tailwindcss";
import "autoprefixer";


import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";


export default function HomePage() {
  return (
    <main className="px-4 py-8 max-w-6xl mx-auto">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-2">
          🎬 Movie Explorer
        </h1>
        <p className="text-gray-600 text-lg">
          Discover your next favorite movie.
        </p>
      </section>

      <section className="mb-8">
        <SearchBar />
      </section>

      <section>
        <MovieList searchTerm="Inception" />
      </section>
    </main>
  );
}
