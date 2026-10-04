"use client";

import { useEffect, useState } from "react";
import { A11yIcon } from "./icons";

type A11yState = {
  font: number;
  contrast: boolean;
  gray: boolean;
  links: boolean;
  motion: boolean;
  readable: boolean;
  cursor: boolean;
};

const EMPTY: A11yState = { font: 0, contrast: false, gray: false, links: false, motion: false, readable: false, cursor: false };

const TOGGLES: { key: keyof Omit<A11yState, "font">; icon: string; label: string }[] = [
  { key: "contrast", icon: "◐", label: "ניגודיות גבוהה" },
  { key: "gray", icon: "▦", label: "גווני אפור" },
  { key: "links", icon: "U", label: "הדגשת קישורים" },
  { key: "motion", icon: "❚❚", label: "עצירת אנימציות" },
  { key: "readable", icon: "Aa", label: "גופן קריא" },
  { key: "cursor", icon: "➤", label: "סמן גדול" },
];

function readStored(): A11yState {
  try {
    return { ...EMPTY, ...JSON.parse(localStorage.getItem("es_a11y") || "{}") };
  } catch {
    return { ...EMPTY };
  }
}

function applyA11y(state: A11yState) {
  let el = document.getElementById("es-a11y-style");
  if (!el) {
    el = document.createElement("style");
    el.id = "es-a11y-style";
    document.head.appendChild(el);
  }
  let css = "";
  const filters: string[] = [];
  if (state.contrast) filters.push("contrast(1.35)");
  if (state.gray) filters.push("grayscale(1)");
  const zoom = 1 + (state.font || 0) * 0.1;
  const target = 'main, footer, [data-header-bar], [role="dialog"]';
  if (filters.length) css += `${target}{filter:${filters.join(" ")};}`;
  if (zoom !== 1) css += `main, footer{zoom:${zoom};}`;
  if (state.readable) css += 'main, footer, header, [role="dialog"], main *, footer *, header *, [role="dialog"] *{font-family:Arial, Helvetica, sans-serif !important;}';
  if (state.links) css += "a{text-decoration:underline !important;text-underline-offset:3px;}a:focus,button:focus{outline:3px solid #E8A13A !important;outline-offset:2px;}";
  if (state.motion) css += "*,*::before,*::after{animation:none !important;transition:none !important;scroll-behavior:auto !important;}";
  if (state.cursor) css += `*{cursor:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M4 2l16 9-7 2-3 7z' fill='%230B2B2D' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E") 4 2, auto !important;}`;
  el.textContent = css;
  try {
    localStorage.setItem("es_a11y", JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function A11yWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(EMPTY);

  useEffect(() => {
    const stored = readStored();
    setState(stored);
    applyA11y(stored);
  }, []);

  function update(next: A11yState) {
    setState(next);
    applyA11y(next);
  }

  const fontText = `${Math.round((1 + (state.font || 0) * 0.1) * 100)}%`;

  return (
    <div className="fab" style={{ position: "fixed", zIndex: 45, right: "clamp(12px,2vw,24px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
      {open && (
        <div role="dialog" aria-label="תפריט נגישות" style={{ width: "min(320px,calc(100vw - 24px))", maxHeight: "calc(100dvh - 180px)", overflowY: "auto", background: "#FFFFFF", border: "1px solid #DDEDEC", borderRadius: 24, boxShadow: "0 24px 60px rgba(11,43,45,0.18)", padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "#0B2B2D" }}>נגישות</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="סגירת תפריט נגישות" style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: "#E1F3F2", color: "#0B2B2D", fontSize: 20, lineHeight: 1, cursor: "pointer" }}>
              ×
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, background: "#F2F8F8", borderRadius: 16, padding: "10px 12px" }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#0B2B2D" }}>גודל טקסט</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button type="button" onClick={() => update({ ...state, font: Math.max(-1, state.font - 1) })} aria-label="הקטנת טקסט" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #CBE4E2", background: "#FFFFFF", color: "#0E7C7F", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>
                −
              </button>
              <span dir="ltr" style={{ minWidth: 44, textAlign: "center", fontSize: 14, fontWeight: 600, color: "#0B2B2D", fontVariantNumeric: "tabular-nums" }}>
                {fontText}
              </span>
              <button type="button" onClick={() => update({ ...state, font: Math.min(4, state.font + 1) })} aria-label="הגדלת טקסט" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #CBE4E2", background: "#FFFFFF", color: "#0E7C7F", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>
                +
              </button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {TOGGLES.map((item) => {
              const on = state[item.key];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => update({ ...state, [item.key]: !on })}
                  aria-pressed={on}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    minHeight: 84,
                    padding: "12px 8px",
                    borderRadius: 16,
                    border: `1.5px solid ${on ? "#0E7C7F" : "#DDEDEC"}`,
                    background: on ? "#0E7C7F" : "#FFFFFF",
                    color: on ? "#FFFFFF" : "#0B2B2D",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background .2s,border-color .2s",
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1, fontWeight: 700 }}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, paddingTop: 4 }}>
            <button type="button" onClick={() => update({ ...EMPTY })} style={{ background: "none", border: "none", padding: "6px 0", color: "#0E7C7F", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              איפוס הגדרות
            </button>
            <a href="/legal#accessibility" className="h-muted" style={{ fontSize: 14, color: "#557072" }}>
              הצהרת נגישות
            </a>
          </div>
        </div>
      )}
      <button type="button" className="h-a11y" onClick={() => setOpen((value) => !value)} aria-label="תפריט נגישות" aria-expanded={open} style={{ width: 54, height: 54, borderRadius: "50%", border: "none", background: "#0B2B2D", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 10px 28px rgba(11,43,45,0.28)", transition: "transform .25s, background .25s" }}>
        <A11yIcon />
      </button>
    </div>
  );
}
