import { ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-950 px-6 py-4 text-white sm:px-8">

      {/* Company logo */}
      <a
        href="/"
        className="shrink-0 overflow-hidden rounded-lg bg-white p-1"
        aria-label="Spotless-G Tech Hub home"
      >
        <img
          src="/images/spotless-g-logo.jpg"
          alt="Spotless-G Tech Hub"
          className="h-14 w-32 object-contain"
        />
      </a>

      {/* Navigation links */}
      <div className="flex items-center gap-5 text-sm font-medium sm:gap-7">

        <a href="/" className="transition hover:text-cyan-400">
          Home
        </a>

        <a href="/products" className="transition hover:text-cyan-400">
          Products
        </a>

        <a href="/courses" className="transition hover:text-cyan-400">
          Courses
        </a>

        {/* Shopping cart */}
        <a
          href="/cart"
          className="flex items-center gap-2 transition hover:text-cyan-400"
          aria-label="Shopping cart, 0 items"
        >
          <ShoppingCart size={21} strokeWidth={2} />
          <span>Cart (0)</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;