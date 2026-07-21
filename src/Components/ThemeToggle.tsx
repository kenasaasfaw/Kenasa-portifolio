import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
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
