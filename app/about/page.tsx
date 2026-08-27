import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          About SpaceX
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.
        </p>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          Today, SpaceX is actively developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars.
        </p>
        <Link href="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}