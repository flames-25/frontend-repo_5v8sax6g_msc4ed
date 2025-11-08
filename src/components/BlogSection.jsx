import { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    title: 'Membangun Pipeline CI/CD untuk Aplikasi Kampus',
    author: 'Farah Putri',
    date: '2025-05-01',
    excerpt: 'Panduan langkah demi langkah membangun pipeline CI/CD dengan GitHub Actions dan Docker.',
  },
  {
    id: 2,
    title: 'Pengujian Otomatis dengan Playwright',
    author: 'Adi Nugroho',
    date: '2025-04-18',
    excerpt: 'Bagaimana menulis end-to-end test yang stabil untuk aplikasi web modern.',
  },
  {
    id: 3,
    title: 'LLM untuk Peningkatan Produktivitas Pengembang',
    author: 'Bima Saputra',
    date: '2025-03-21',
    excerpt: 'Eksperimen menggunakan model bahasa besar untuk membantu refactoring dan dokumentasi.',
  },
];

export default function BlogSection() {
  const [query, setQuery] = useState('');
  const filtered = initialPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Blog Artikel</h2>
            <p className="mt-2 text-gray-700">Tulisan dan pembaruan riset dari tim kami.</p>
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel..."
            className="hidden md:block w-72 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article key={post.id} className="p-5 rounded-lg border bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              <div className="mt-1 text-sm text-gray-600">{post.author} • {new Date(post.date).toLocaleDateString()}</div>
              <p className="mt-3 text-gray-700">{post.excerpt}</p>
              <button className="mt-4 text-sm text-indigo-600">Baca selengkapnya</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
