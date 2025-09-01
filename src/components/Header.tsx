// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <div className="max-w-5xl mx-auto p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🎬 My Movie App
        </Link>
      </div>
    </header>
  );
}
