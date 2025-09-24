"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved theme from localStorage or default to system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      console.log("Loaded saved theme:", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      console.log("Using system dark theme preference");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply theme to document
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        console.log("Applied dark theme");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("Applied light theme");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Toggling theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button className="p-3 rounded-full bg-white shadow-lg border border-gray-200">
        <Sun className="w-5 h-5 text-gray-700" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
      )}
    </button>
  );
}
