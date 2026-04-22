export default function Projects() {
  return (
    <main className="px-10 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Projects & Experience</h1>

      {/* FINTECH */}
      <div className="mt-10 border p-6 rounded">
        <h2 className="text-2xl font-bold">FinTech Backend System</h2>
        <p className="mt-2 text-gray-400">
          Worked nearly 3 years on a FinTech platform handling transactions,
          authentication, and integrations.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Django REST, MSSQL, MySQL, Firebase
        </p>
      </div>

      {/* AI SAAS */}
      <div className="mt-6 border p-6 rounded">
        <h2 className="text-2xl font-bold">AI SaaS Platform</h2>
        <p className="mt-2 text-gray-400">
          Built APIs for AI tools with Stripe subscription system and Azure AI.
        </p>
        <p className="text-sm text-gray-500">
          Django, PostgreSQL, Azure, Stripe
        </p>
      </div>

      {/* AIMHI */}
      <div className="mt-6 border p-6 rounded">
        <h2 className="text-2xl font-bold">Cloud Backend System (AIMHI)</h2>
        <p className="mt-2 text-gray-400">
          Flask backend deployed on AWS with optimized performance and CI/CD pipelines.
        </p>
        <p className="text-sm text-gray-500">
          Flask, PostgreSQL, AWS, Docker
        </p>
      </div>

      {/* VETERINARY */}
      <div className="mt-6 border p-6 rounded">
        <h2 className="text-2xl font-bold">Veterinary Management System</h2>
        <p className="mt-2 text-gray-400">
          Full backend system including EMR, scheduling, billing.
        </p>
        <p className="text-sm text-gray-500">
          Django, PostgreSQL
        </p>
      </div>
    </main>
  );
}