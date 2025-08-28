// lib/omdb.ts
export async function fetchMovie(title: string) {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);

  if (!res.ok) throw new Error("Film verisi alınamadı");

  const data = await res.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data;
}
