import { useState } from "react"
import { THEMES } from "./themes"
import { useTheme } from "./ThemeProvider"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0]

  return (
    <div className="theme-switch">
      {open && (
        <div
          className="theme-switch__backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        className="theme-switch__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="theme-switch__eyebrow">STYLE</span>
        <span className="theme-switch__current">{current.label}</span>
        <span className="theme-switch__chev" aria-hidden="true">
          ▲
        </span>
      </button>

      {open && (
        <ul className="theme-switch__menu" role="listbox" aria-label="デザインスタイル">
          {THEMES.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                role="option"
                aria-selected={t.id === theme}
                onClick={() => {
                  setTheme(t.id)
                  setOpen(false)
                }}
              >
                <span className="dot" data-swatch={t.id} aria-hidden="true" />
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
