import MovieCard from "./MovieCard";
import { Movie } from "@/types/types";



const dummyMovies: Movie[] = [
  {
    imdbID: "1",
    Title: "Inception",
    Year: "2010",
    Poster: "/poster1.jpg",
    Type: "movie"
  },
  {
    imdbID: "2",
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "/poster2.jpg",
    Type: "movie"
  },
  {
    imdbID: "3",
    Title: "Interstellar",
    Year: "2014",
    Poster: "/poster3.jpg",
    Type: "movie"
  }

];


export default function MovieList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {dummyMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
