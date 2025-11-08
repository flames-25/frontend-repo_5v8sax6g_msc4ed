import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7o1K4k0B8p8oInrW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Software Engineering Lab
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Pusat riset, kolaborasi, dan inovasi rekayasa perangkat lunak di kampus. Kami membangun software berkualitas, berbasis riset, berdampak nyata.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#profile" className="px-5 py-3 rounded-md bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700">Lihat Profil</a>
              <a href="#recruit" className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 bg-white font-medium hover:bg-gray-50">Daftar SE Geeks</a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  );
}
