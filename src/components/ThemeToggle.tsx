"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "v47-preview-theme";

type PreviewTheme = "default" | "teal";

/**
 * Internal design-comparison tool — NOT part of the shipped V47 brand.
 * Toggles data-theme="teal" on <html> to preview an alternate palette,
 * typography, and logo mark alongside the current default. Deliberately
 * styled outside the token system so it never gets mistaken for real
 * site chrome, in either theme.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<PreviewTheme>("default");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "teal") {
      document.documentElement.setAttribute("data-theme", "teal");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing one-time from localStorage on mount, not an external subscription
      setTheme("teal");
    }
  }, []);

  function select(next: PreviewTheme) {
    setTheme(next);
    if (next === "teal") {
      document.documentElement.setAttribute("data-theme", "teal");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <div
      className="print:hidden"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "0.5rem 1rem",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      <span style={{ opacity: 0.6 }}>Design preview — not final</span>
      <button
        type="button"
        onClick={() => select("default")}
        style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #ffffff",
          background: theme === "default" ? "#ffffff" : "transparent",
          color: theme === "default" ? "#000000" : "#ffffff",
          cursor: "pointer",
        }}
      >
        V47 Classic
      </button>
      <button
        type="button"
        onClick={() => select("teal")}
        style={{
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #00ced1",
          background: theme === "teal" ? "#00ced1" : "transparent",
          color: theme === "teal" ? "#000000" : "#00ced1",
          cursor: "pointer",
        }}
      >
        V47 Teal
      </button>
    </div>
  );
}
