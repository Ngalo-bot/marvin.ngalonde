interface WavyDividerProps {
  color: string // Tailwind color class, e.g., "bg-navy-950" or "bg-white"
  direction: "top" | "bottom"
  className?: string
}

export default function WavyDivider({ color, direction, className }: WavyDividerProps) {
  // SVG path for a subtle wave
  const wavePath = "M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z" // A single wave, adjust for more complex if needed

  const transformStyle = direction === "top" ? "rotate(180deg)" : "none"

  return (
    <div className={`relative w-full h-20 overflow-hidden ${className}`}>
      <svg
        className={`absolute w-full h-full ${direction === "top" ? "-top-1" : "-bottom-1"}`}
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        style={{ transform: transformStyle }}
      >
        <path d={wavePath} fill="currentColor" className={color} />
      </svg>
    </div>
  )
}
