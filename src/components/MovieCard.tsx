import Link from "next/link";
import Image from 'next/image';
import { Movie } from "@/types/types";

type Props = {
  movie: Movie;
};
                                                    //bu = üstteki (id:001)
export default function MovieCard({ movie }: Props)  {
  return (
    <div className="border rounded shadow p-3">
      <Image
    src={movie.Poster || "/no-image.png"}
    alt={movie.Title}
    width={400}                      // zorunlu
    height={256}                    // yaklaşık 64 * 4 = 256px
    className="w-full h-64 object-cover rounded"
  />
      <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
      <Link href={`/movie/${movie.imdbID}`}>
        <button className="mt-2 text-blue-500">Details</button>
      </Link>
    </div>
  );
}
