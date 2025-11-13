export const getColorStyle = (type: "bg" | "text" | "border", color: string) => {
  const colorMap: Record<string, Record<string, string>> = {
    bg: {
      "neutral-cream": "#faf7f2",
      "neutral-beige": "#e8e3d6",
      "neutral-brown": "#453630",
      "primary-red": "#dc153d",
      "primary-gold": "#ffd128",
      "green-amande": "#a8c69f",
      white: "#ffffff",
    },
    text: {
      "text-dark": "#1a1a1a",
      "text-gray": "#6b6b6b",
      "primary-red": "#dc153d",
      "primary-gold": "#ffd128",
      "neutral-brown": "#453630",
    },
    border: {
      "primary-gold": "#ffd128",
      "neutral-beige": "#e8e3d6",
      "primary-red": "#dc153d",
    },
  }

  const hex = colorMap[type]?.[color]
  if (!hex) return {}

  if (type === "bg") return { backgroundColor: hex }
  if (type === "text") return { color: hex }
  if (type === "border") return { borderColor: hex }
  return {}
}
