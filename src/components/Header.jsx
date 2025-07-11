export default function Header({ onToggle }) {
  return (
    <header className="bg-white px-4 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">GaingeCampus AI Chat</h1>
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-600" onClick={onToggle}>
        ☰
      </button>
    </header>
  );
}
