import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { DEFAULT_THEME, THEMES, type ThemeId } from "./themes"

const STORAGE_KEY = "portfolio-theme"

type ThemeCtx = { theme: ThemeId; setTheme: (t: ThemeId) => void }

const Ctx = createContext<ThemeCtx>({ theme: DEFAULT_THEME, setTheme: () => {} })

function readStored(): ThemeId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null
    if (saved && THEMES.some((t) => t.id === saved)) return saved
  } catch {
    /* localStorage unavailable */
  }
  return DEFAULT_THEME
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(readStored)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>
}

export function useTheme() {
  return useContext(Ctx)
}
