import type { SVGProps } from 'react'

/** Original vertical marigold-and-leaf garland border, a traditional Indian card-edge motif. */
export function FloralBorder(props: SVGProps<SVGSVGElement>) {
  const units = [0, 1, 2, 3, 4, 5]

  return (
    <svg
      viewBox="0 0 40 480"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="20" y1="0" x2="20" y2="480" stroke="#5B7A4A" strokeWidth="1.5" opacity="0.6" />
      {units.map((i) => {
        const cy = 40 + i * 80
        return (
          <g key={i}>
            <g fill="#5B7A4A" opacity="0.85">
              <ellipse
                cx="20"
                cy={cy - 26}
                rx="7"
                ry="3.5"
                transform={`rotate(-30 20 ${cy - 26})`}
              />
              <ellipse
                cx="20"
                cy={cy + 26}
                rx="7"
                ry="3.5"
                transform={`rotate(30 20 ${cy + 26})`}
              />
            </g>
            <g fill="#E08B3B">
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <ellipse
                  key={angle}
                  cx="20"
                  cy={cy - 6}
                  rx="5"
                  ry="3"
                  transform={`rotate(${angle} 20 ${cy})`}
                />
              ))}
            </g>
            <circle cx="20" cy={cy} r="4" fill="#F4C860" />
          </g>
        )
      })}
    </svg>
  )
}
