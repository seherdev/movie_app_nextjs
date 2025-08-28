"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // burada sorguyu state veya URL parametresi olarak aktarabilirsin
    console.log("searching for", query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        placeholder="Search movies..."
        className="flex-1 border px-4 py-2 rounded-l"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Search
      </button>
    </form>
  );
}
