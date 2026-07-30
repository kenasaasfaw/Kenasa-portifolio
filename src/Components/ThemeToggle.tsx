import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 hover:bg-primary/10",
        "focus:outline-none"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" /> : <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />}
    </button>
  );
};
