export default function MovieDetail({ params }: { params: { id: string } }) {
  // id'ye göre veri fetch edilecek
  const movieId = params.id;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Movie Detail: {movieId}</h1>
      <p>Here, the movie details will be fetched and shown.</p>
    </div>
  );
}
