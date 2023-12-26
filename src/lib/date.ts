export function formatDate(date: string) {
  if (date === "Present") return "Present"
  const d = new Date(date)
  return `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`
}
