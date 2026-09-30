// Shared theme helpers. The <html data-theme> attribute is the source of truth; the
// stylesheet reads it, and layout.tsx restores it before paint.
export function isDark(): boolean {
  const t = document.documentElement.getAttribute("data-theme");
  if (t) return t === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function setTheme(dark: boolean) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  try {
    localStorage.setItem("eyn-theme", dark ? "dark" : "light");
  } catch {}
}

export function toggleTheme() {
  setTheme(!isDark());
}
