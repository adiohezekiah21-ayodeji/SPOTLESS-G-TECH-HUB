function Footer() {
return (
<footer className="bg-slate-950 text-slate-300">
{/* Footer main section */}
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

    {/* Brand section */}
    <div>
      <a href="/" className="text-2xl font-extrabold tracking-tight text-white">
        SPOTLESS-G <span className="text-cyan-400">TECH HUB</span>
      </a>

      <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
        Your trusted destination for quality technology products,
        expert technical solutions, and digital skills training.
      </p>

      {/* Social media links */}
      <div className="mt-6 flex gap-3">
        <a
          href="#"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 font-semibold transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
        >
          f
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-xs font-bold transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
        >
          IG
        </a>

        <a
          href="#"
          aria-label="YouTube"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-xs font-bold transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
        >
          YT
        </a>
      </div>
    </div>

    {/* Explore section */}
    <nav aria-label="Explore">
      <h3 className="text-lg font-bold text-white">Explore</h3>

      <div className="mt-5 flex flex-col gap-4 text-sm">
        <a href="/" className="transition hover:text-cyan-400">Home</a>
        <a href="/products" className="transition hover:text-cyan-400">Products</a>
        <a href="/courses" className="transition hover:text-cyan-400">Technology Courses</a>
        <a href="/about" className="transition hover:text-cyan-400">About Us</a>
      </div>
    </nav>

    {/* Services section */}
    <nav aria-label="Our services">
      <h3 className="text-lg font-bold text-white">Our Services</h3>

      <div className="mt-5 flex flex-col gap-4 text-sm">
        <a href="/products" className="transition hover:text-cyan-400">Laptops & Computers</a>
        <a href="/products" className="transition hover:text-cyan-400">Computer Accessories</a>
        <a href="/services" className="transition hover:text-cyan-400">Repairs & Maintenance</a>
        <a href="/courses" className="transition hover:text-cyan-400">Digital Skills Training</a>
      </div>
    </nav>

    {/* Newsletter section */}
    <div>
      <h3 className="text-lg font-bold text-white">Stay Connected</h3>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        Get updates on new products, special offers, and upcoming technology courses.
      </p>

      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          alert("Thank you for your interest! Newsletter registration will be available soon.");
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="min-w-0 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
        />

        <button
          type="submit"
          className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Footer bottom section */}
  <div className="border-t border-slate-800">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-slate-500 sm:flex-row sm:px-8 sm:text-left">
      <p>
        © {new Date().getFullYear()} Spotless-G Tech Hub. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <a href="/privacy" className="transition hover:text-cyan-400">
          Privacy Policy
        </a>

        <a href="/terms" className="transition hover:text-cyan-400">
          Terms of Use
        </a>

        <a href="/contact" className="transition hover:text-cyan-400">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</footer>

);
}

export default Footer;