"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="font-bold text-xl text-blue-600">
          Tohidul.dev
        </a>
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 border-b border-gray-200 dark:border-gray-800 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
