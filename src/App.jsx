import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import PeopleAndRecruit from './components/PeopleAndRecruit';
import BlogSection from './components/BlogSection';

function Footer() {
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Software Engineering Lab — Kampus.</p>
        <div className="text-sm text-gray-600">Built with ❤️ by SE Geeks</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProfileSection />
        <PeopleAndRecruit />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
