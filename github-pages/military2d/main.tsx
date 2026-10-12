import React from "react"
import ReactDOM from "react-dom/client"
import Military2D from "../../app/military2d/page"
import "../../app/globals.css"
import "../../app/military2d/military2d.css"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element was not found")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Military2D />
  </React.StrictMode>,
)
