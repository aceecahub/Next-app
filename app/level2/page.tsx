import Link from "next/link";

const links = [
  { href: "/level2/routing", label: "routing" },
];

export default function Level1Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center gap-8 p-6">
      <h1 className="text-3xl font-bold">Level 2</h1>

      <div className="grid w-full grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black rounded-lg border border-gray-200 bg-white p-4 text-center font-medium shadow-sm transition hover:bg-gray-50 hover:shadow"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}   