function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="overflow-hidden bg-slate-950 px-6 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Left Side: Hero Text */}
          <div className="text-center lg:text-left">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-base">
              Technology Made Simple
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight transition-all duration-300 hover:scale-[1.02] hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] sm:text-5xl lg:text-6xl">
              Discover the Future of{" "}
              <span className="text-cyan-400">Technology</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg lg:mx-0">
              Shop quality laptops, computer accessories, and technology
              equipment. Learn valuable digital skills and take your
              technological journey to the next level with SPOTLESS-G TECH HUB.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              <a
                href="/products"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Explore Products
              </a>

              <a
                href="/courses"
                className="rounded-lg border border-cyan-400 px-6 py-3 font-bold text-cyan-400 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
              >
                Discover Our Courses
              </a>

            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Subtle Cyan Glow Behind the Image */}
            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <img
              src="/images/hero-image.png"
              alt="Futuristic technology illustration showing a cybernetic head connected to computing equipment and technology fields"
              className="relative z-10 h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
            />

          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;