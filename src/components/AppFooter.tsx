export default function AppFooter() {
  return (
    <footer className="w-full mt-16 border-t border-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        
        {/* Left */}
        <p className="mb-2 md:mb-0">
          © 2024 SPEAK SMART AI. CURATING THE BEAUTY OF LANGUAGE.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <button className="hover:text-gray-600 transition">PRIVACY</button>
          <button className="hover:text-gray-600 transition">TERMS</button>
          <button className="hover:text-gray-600 transition">SUPPORT</button>
        </div>

      </div>
    </footer>
  );
}