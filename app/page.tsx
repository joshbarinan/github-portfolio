export default function Home() {
  return (
    <main className="px-10 py-16 max-w-5xl mx-auto">

      {/* HERO */}
      <section>
        <h1 className="text-5xl font-bold leading-tight">
          Joshua Bariñan
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Backend Engineer | FinTech | Django | AWS | DevOps
        </p>

        <p className="mt-6 max-w-3xl text-gray-400">
          Backend-focused Full-Stack Engineer with 7+ years of experience
          building scalable APIs, fintech systems, and cloud infrastructure.
          Strong expertise in Python (5 years), SQL (7 years), and DevOps.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/projects" className="bg-white text-black px-6 py-2 rounded">
            View Projects
          </a>

          <a href="/contact" className="border px-6 py-2 rounded">
            Contact Me
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold">Core Expertise</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-300">
          <div>
            <h3 className="font-semibold">Backend</h3>
            <p>Django, Flask, FastAPI</p>
          </div>

          <div>
            <h3 className="font-semibold">Database</h3>
            <p>PostgreSQL, MSSQL, MySQL (7 yrs)</p>
          </div>

          <div>
            <h3 className="font-semibold">Cloud & DevOps</h3>
            <p>AWS, Azure, Docker, CI/CD</p>
          </div>

          <div>
            <h3 className="font-semibold">Auth & Security</h3>
            <p>JWT, OAuth2, SSL/TLS</p>
          </div>

          <div>
            <h3 className="font-semibold">Async Systems</h3>
            <p>Celery, Background Jobs</p>
          </div>

          <div>
            <h3 className="font-semibold">Frontend</h3>
            <p>Vue.js, JavaScript</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold">What I Do</h2>

        <ul className="mt-6 space-y-3 text-gray-400">
          <li>• Build scalable REST APIs (Django/Flask)</li>
          <li>• Design secure authentication & authorization systems</li>
          <li>• Optimize database queries & performance</li>
          <li>• Deploy and manage cloud infrastructure (AWS/Azure)</li>
          <li>• Implement CI/CD pipelines and Dockerized environments</li>
        </ul>
      </section>

    </main>
  );
}