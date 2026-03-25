import Link from 'next/link';

const navItems = [
  { href: '/search', label: 'Search' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/request-analysis', label: 'Request Analysis' },
  { href: '/about', label: 'About' }
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          Federal Opportunity Intelligence
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
