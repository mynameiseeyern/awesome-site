"use client";
import { toggleTheme } from "./theme";

export function ThemeToggle() {
  return (
    <button type="button" aria-label="Toggle dark mode" onClick={toggleTheme}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z" />
      </svg>
    </button>
  );
}
