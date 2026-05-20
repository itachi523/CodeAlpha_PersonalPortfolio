function About() {

  return (

    <section
      className="min-h-screen bg-black text-white px-10 pt-36 pb-20"
    >

      <div
        className="max-w-7xl mx-auto border border-cyan-400 rounded-3xl p-10 bg-[#02131f]/60 shadow-[0_0_40px_#00ffff33]"
      >

        {/* TOP SECTION */}

        <div
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT */}

          <div
            className="flex justify-center"
          >

            <div
              className="relative"
            >

              {/* GLOW */}

              <div
                className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20 animate-pulse"
              />

              {/* IMAGE */}

              <img
                src="/profile.jpg"
                alt="Bhuvan"
                className="
                  relative
                  w-[320px]
                  h-[320px]
                  rounded-full
                  object-cover
                  border-4
                  border-cyan-400
                  shadow-[0_0_50px_cyan]
                "
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h1
              className="text-6xl text-cyan-400 mb-6"
              style={{ fontFamily: "Orbitron" }}
            >
              ABOUT ME
            </h1>

            <p className="text-xl text-cyan-200 leading-relaxed mb-6">

              Enthusiastic B.Tech CSE (AIML) student with
              strong interest in software development,
              Artificial Intelligence and futuristic
              technologies.

            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">

              Experienced in Python, Machine Learning,
              Web Development and AI-based projects.
              Passionate about building immersive
              digital experiences and smart systems.

            </p>

            <p className="text-lg text-gray-300 leading-relaxed">

              Seeking opportunities to enhance technical
              skills, work on innovative projects and
              gain real-world industry experience.

            </p>

          </div>

        </div>

        {/* EDUCATION */}

        <div className="mt-24">

          <h2
            className="text-4xl text-cyan-400 mb-10"
            style={{ fontFamily: "Orbitron" }}
          >
            EDUCATION
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* INTER */}

            <div
              className="
                border border-cyan-400
                rounded-2xl
                p-8
                bg-black/40
                hover:scale-105
                transition
              "
            >

              <h3 className="text-2xl text-cyan-300 mb-4">

                Intermediate (Class XII)

              </h3>

              <p className="text-lg text-white">

                Sri Chaitanya Junior College

              </p>

              <p className="text-gray-400 mt-2">

                Tirupati, Andhra Pradesh

              </p>

              <p className="text-cyan-200 mt-4">

                Aug 2021 – May 2022

              </p>

            </div>

            {/* BTECH */}

            <div
              className="
                border border-cyan-400
                rounded-2xl
                p-8
                bg-black/40
                hover:scale-105
                transition
              "
            >

              <h3 className="text-2xl text-cyan-300 mb-4">

                Bachelor of Computer Science Engineering

              </h3>

              <p className="text-lg text-white">

                GITAM University

              </p>

              <p className="text-gray-400 mt-2">

                CSE AIML • 2023 – 2027

              </p>

              <p className="text-cyan-200 mt-4">

                GPA : 7.3 / 10

              </p>

            </div>

          </div>

        </div>

        {/* SKILLS */}

        <div className="mt-24">

          <h2
            className="text-4xl text-cyan-400 mb-10"
            style={{ fontFamily: "Orbitron" }}
          >
            SKILLS
          </h2>

          <div
            className="grid md:grid-cols-3 gap-6"
          >

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "Machine Learning",
              "Artificial Intelligence",
              "Problem Solving",
              "Leadership",
              "Communication"
            ].map((skill, index) => (

              <div
                key={index}
                className="
                  border border-cyan-400
                  rounded-xl
                  p-5
                  text-center
                  bg-black/40
                  hover:bg-cyan-400
                  hover:text-black
                  transition
                "
              >

                {skill}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;