function Home() {

  return (

    <section className="min-h-screen flex items-center justify-center bg-black text-white px-10">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 text-xl tracking-[5px] mb-5">
            WELCOME BACK SIR
          </p>

          <h1
            className="text-7xl font-bold leading-tight"
            style={{ fontFamily: "Orbitron" }}
          >
            DARSI
            <br />

            <span className="text-cyan-400">
              BHUVAN
            </span>

          </h1>

          <p className="mt-8 text-2xl text-cyan-200">
            AI / ML ENGINEER
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">

            Passionate about Artificial Intelligence,
            Machine Learning, Web Development,
            futuristic interfaces and immersive
            digital experiences.

          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/itachi523"
              target="_blank"
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/darsi-bhuvanasivakrishna"
              target="_blank"
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="w-[350px] h-[350px] rounded-full border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_50px_#00ffff88] animate-pulse">

            <div className="w-[250px] h-[250px] rounded-full border border-cyan-300 flex items-center justify-center text-cyan-400 text-3xl text-center">

              AI SYSTEM
              <br />
              ACTIVE

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Home;