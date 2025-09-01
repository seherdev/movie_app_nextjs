//new. doldurcaktın burayı. sonra bi şey çıktı. tekrar yap.
//yaptım.


import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-purple-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">🎬 Movie Explorer</Link>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
        </div>
      </div>
    </nav>
  );
}
