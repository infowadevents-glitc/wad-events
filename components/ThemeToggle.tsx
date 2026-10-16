"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-wad-nude/40 animate-pulse ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex items-center gap-2 px-2.5 py-1.5 sm:p-2 rounded-full transition-all duration-300 border focus:outline-none cursor-pointer ${
        isDark
          ? "bg-white/10 hover:bg-white/20 text-wad-steel border-white/15 shadow-sm"
          : "bg-white hover:bg-wad-nude/40 text-wad-slate hover:text-wad-wine border-wad-nude/80 shadow-sm"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-wad-charcoal transition-transform duration-300 hover:-rotate-12" />
      )}
      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
