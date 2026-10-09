function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-8 text-center text-white">
      <h2 className="text-xl font-bold">
        SPOTLESS-G <span className="text-cyan-400">TECH HUB</span>
      </h2>

      <p className="mt-3 text-sm text-slate-400">
        Your trusted destination for technology products and learning.
      </p>

      <p className="mt-5 text-sm text-slate-500">
        © {new Date().getFullYear()} Spotless-G Tech Hub. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;