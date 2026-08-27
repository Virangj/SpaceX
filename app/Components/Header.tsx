import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link href="/">
        <img src="/favicon.ico" alt="SpaceX Logo" className="h-10 w-auto" />
      </Link>
      {/* Navigation links can be added here */}
    </header>
  );
}