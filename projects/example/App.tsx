// App.tsx
import FortuneCard from "./components/FortuneCard";
import Mascot from "./components/Mascot";

export default function App() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-yellow-50 opacity-60 -z-10" />

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-pink-700 drop-shadow-sm">
          🧸 Lovable Fortune
        </h1>
        <p className="text-pink-500 text-lg mt-2">รับกำลังใจจากน้องหมีในทุกๆ วัน</p>
      </header>

      {/* Fortune Card */}
      <FortuneCard />

      {/* Mascot ตัวละคร */}
      <Mascot />

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-400 text-center">
        © 2025 Lovable | Made with 💖 by คุณเค้ก
      </footer>
    </main>
  );
}
