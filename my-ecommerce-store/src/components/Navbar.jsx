function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-950 px-8 py-5 text-white">
      <h1 className="text-2xl font-bold">
        SPOTLESS-G <span className="text-cyan-400">TECH HUB</span>
      </h1>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-cyan-400">
          Home
        </a>

        <a href="#" className="hover:text-cyan-400">
          Products
        </a>

        <a href="#" className="hover:text-cyan-400">
          Courses
        </a>

        <a href="#" className="hover:text-cyan-400">
          Cart (0)
        </a>
      </div>
    </nav>
  );
}

export default Navbar;