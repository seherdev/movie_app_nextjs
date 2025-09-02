

import { Movie } from '@/src/types/types';

const API_URL = "https://www.omdbapi.com/";


const API_KEY = process.env._PUBLIC_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export async function fetchMovies(searchTerm: string): Promise<Movie[] | null> {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&type=movie`);


  
  if (!res.ok) throw new Error('API request failed');
  
  const data = await res.json();

  if (data.Response === "False") throw new Error(data.Error);

  return {
    Title: data.Title,
    Year: data.Year,
    Poster: data.Poster,
    Genre: data.Genre, //database'de yoksa hata verir
    imdbID: data.imdbID,
  };
}


//http://www.omdbapi.com/?989c6da9=[989c6da9]&
// IMDb ID ile detaylar
interface MovieDetails {
  Title: string;
  Year: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: Array<{ Source: string; Value: string }>;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response: string;
  Error?: string;
}


/* 
export async function getMovieDetails(imdbID: string): Promise<MovieDetails> {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  const data: MovieDetails = await res.json();

  if (data.Response === 'False') throw new Error(data.Error);
  return data;
}
*/