import MovieCard from "./MovieCard";
import { Movie } from "@/types/types";




const dummyMovies :  Movie[] = [
  { id: "1", title: "Inception", year: "2010", poster: "/poster1.jpg" },
  { id: "2", title: "Interstellar", year: "2014", poster: "/poster2.jpg" },
];

export default function MovieList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {dummyMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
