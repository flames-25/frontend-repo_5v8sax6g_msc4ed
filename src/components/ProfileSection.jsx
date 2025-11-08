export default function ProfileSection() {
  const roadmap = [
    { title: 'Fundamental RPL', desc: 'Git, CI/CD, Testing, Clean Code' },
    { title: 'Arsitektur & Cloud', desc: 'Microservices, Docker, Kubernetes' },
    { title: 'AI for SE', desc: 'LLM, Program Synthesis, Code Intelligence' },
    { title: 'Research & Publication', desc: 'Experiment, dataset, writing' },
  ];

  const focuses = [
    'Software Quality & Testing',
    'DevOps & Cloud Native',
    'Requirements & UX Engineering',
    'Software Architecture & Design',
    'Machine Learning for SE',
  ];

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tentang Lab SE</h2>
            <p className="mt-4 text-gray-700">
              Laboratorium Rekayasa Perangkat Lunak berfokus pada pengembangan metodologi, tools, dan praktik terbaik dalam membangun perangkat lunak yang andal dan berkelanjutan.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border bg-gray-50">
                <h3 className="font-semibold text-gray-900">Visi</h3>
                <p className="mt-2 text-sm text-gray-700">Menjadi pusat unggulan riset dan pengembangan RPL yang berkontribusi pada industri dan masyarakat.</p>
              </div>
              <div className="p-5 rounded-lg border bg-gray-50">
                <h3 className="font-semibold text-gray-900">Misi</h3>
                <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Melakukan riset kolaboratif dan publikasi ilmiah</li>
                  <li>Mengembangkan produk perangkat lunak berkualitas</li>
                  <li>Membina komunitas SE Geeks di kampus</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Roadmap</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {roadmap.map((r) => (
                <div key={r.title} className="p-4 rounded-lg border">
                  <div className="font-medium text-gray-900">{r.title}</div>
                  <div className="text-sm text-gray-700 mt-1">{r.desc}</div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-8">Fokus & Scope</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {focuses.map((f) => (
                <li key={f} className="px-3 py-2 rounded border bg-white text-gray-800">{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
