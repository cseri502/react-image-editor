import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <img src="/editor.png" alt="Image Editor" className="w-8 h-8" />
        <h1
          className={`text-2xl sm:text-3xl font-bold ${
            darkMode ? "text-white" : "text-[#434454]"
          }`}
        >
          Image Editor
        </h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-lg transition-colors ${
          darkMode
            ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
            : "bg-[#f3f3fb] text-[#434454] hover:bg-[#32b09a] hover:text-white"
        }`}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
