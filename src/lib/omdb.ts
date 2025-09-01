import { Movie } from '@/types/types';

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export async function fetchMovie(title: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}?t=${title}&apikey=${API_KEY}&plot=full`);
  
  if (!res.ok) throw new Error('API request failed');
  
  const data = await res.json();

  if (data.Response === "False") throw new Error(data.Error);

  return {
    Title: data.Title,
    Year: data.Year,
    Poster: data.Poster,
    Genre: data.Genre,
    imdbID: data.imdbID,
  };
}
