'use client';

import { useState } from 'react';
import { fetchMovie } from '@/lib/omdb';
import { Movie } from '@/types/types';
import Image from 'next/image';


export default function SearchPage() {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState<Movie | null>(null); //ha?

  const handleSearch = async () => {
    try {
      const data = await fetchMovie(title);
      setMovie(data);
    } catch (err) {
      console.error(err);
      alert("Film bulunamadı.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">🎬 Film Ara</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Film adı girin..."
          className="border px-4 py-2 rounded w-full"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Ara
        </button>
      </div>

      {movie && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{movie.Title} ({movie.Year})</h2>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={256}
            height={384}
            className="mt-4 rounded"
          />        
        </div>
      )}
    </div>
  );
}
