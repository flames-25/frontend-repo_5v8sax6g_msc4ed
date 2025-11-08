import { useState } from 'react';

const samplePeople = [
  { id: 'farah', name: 'Farah Putri', role: 'Lead Researcher', bio: 'Software quality, testing automation, and reliability.', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 'adi', name: 'Adi Nugroho', role: 'DevOps Engineer', bio: 'Cloud-native, CI/CD, and platform engineering.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 'bima', name: 'Bima Saputra', role: 'ML for SE', bio: 'Code intelligence and LLM-assisted development.', avatar: 'https://i.pravatar.cc/150?img=22' },
];

export default function PeopleAndRecruit() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: '', major: '', interests: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="people" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Personil</h2>
            <p className="mt-2 text-gray-700">Klik kartu untuk melihat detail.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {samplePeople.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  className="text-left p-4 rounded-lg border bg-white hover:shadow transition"
                >
                  <div className="flex items-center gap-3">
                    <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-gray-900">{p.name}</div>
                      <div className="text-sm text-gray-600">{p.role}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selected && (
              <div className="mt-6 p-5 rounded-lg border bg-white">
                <div className="flex items-center gap-4">
                  <img src={selected.avatar} alt={selected.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{selected.name}</div>
                    <div className="text-sm text-gray-600">{selected.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{selected.bio}</p>
                <button className="mt-4 text-sm text-indigo-600" onClick={() => setSelected(null)}>Tutup</button>
              </div>
            )}
          </div>

          <div id="recruit">
            <h2 className="text-3xl font-bold text-gray-900">SE Geeks Recruitment</h2>
            <p className="mt-2 text-gray-700">Isi formulir untuk bergabung sebagai kontributor dan peneliti.</p>
            {submitted ? (
              <div className="mt-6 p-5 rounded-lg border bg-white text-green-700">
                Terima kasih! Pendaftaran kamu sudah kami terima. Kami akan menghubungi via email.
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Program Studi / Angkatan</label>
                  <input
                    type="text"
                    required
                    value={form.major}
                    onChange={(e) => setForm({ ...form, major: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Informatika 2023"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Minat & Topik</label>
                  <textarea
                    required
                    value={form.interests}
                    onChange={(e) => setForm({ ...form, interests: e.target.value })}
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    rows={4}
                    placeholder="DevOps, Testing, AI for SE"
                  />
                </div>
                <button type="submit" className="px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">Kirim Pendaftaran</button>
              </form>
            )}

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900">Daftar SE Geeks</h3>
              <ul className="mt-3 space-y-2">
                {['Raka', 'Alya', 'Dimas', 'Salsabila'].map((name) => (
                  <li key={name} className="px-3 py-2 rounded border bg-white text-gray-800">{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
