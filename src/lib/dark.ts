export const darkModeEvent = new CustomEvent("dark-mode")

export function getDarkMode(): boolean {
  return (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
}
