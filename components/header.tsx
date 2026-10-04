"use client";

import { useEffect, useRef, useState } from "react";
import { SOCIAL } from "./icons";

const NAV = [
  { href: "#about", label: "אודות" },
  { href: "#expertise", label: "תחומי התמחות" },
  { href: "#schedule", label: "הקליניקה" },
  { href: "#media", label: "פודקאסט" },
  { href: "#ami", label: "ספרי ילדים" },
  { href: "#contact", label: "צור קשר" },
];

const MENU = [
  { href: "#about", label: "אודות" },
  { href: "#expertise", label: "תחומי התמחות" },
  { href: "#Occupation", label: "השירותים בקליניקה" },
  { href: "#schedule", label: "מיקום וזמנים" },
  { href: "#media", label: "פודקאסט וסרטונים" },
  { href: "#ami", label: "ספרי ילדים" },
  { href: "#contact", label: "צור קשר" },
];

const linkStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: 14,
  padding: "11px 4px",
  borderBottom: "1px solid #E1EEED",
  color: "#0B2B2D",
} as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const bar = document.querySelector<HTMLElement>("[data-header-bar]");
      if (!bar) return;
      const y = window.scrollY;
      bar.style.boxShadow = y > 12 ? "0 10px 40px rgba(11,43,45,0.10)" : "0 8px 30px rgba(11,43,45,0.06)";
      bar.style.background = y > 12 ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.82)";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => setShown(open), open ? 40 : 0);
    return () => window.clearTimeout(id);
  }, [open, mounted]);

  function openMenu() {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    setMounted(true);
    setOpen(true);
  }

  function closeMenu(fast = false) {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    setOpen(false);
    setShown(false);
    hideTimer.current = window.setTimeout(() => setMounted(false), fast ? 350 : 720);
  }

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 30, padding: "14px var(--page-gutter) 0" }}>
        <div
          data-header-bar="true"
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            transition: "box-shadow .3s, background .3s",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(14,124,127,0.10)",
            borderRadius: 999,
            padding: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            boxShadow: "0 8px 30px rgba(11,43,45,0.06)",
          }}
        >
          <a href="#home" aria-label="פרופ' אייל שיינר – דף הבית" style={{ display: "flex", alignItems: "center", paddingInlineStart: 14 }}>
            <img src="/assets/logo.png" alt="אייל שיינר – מומחה למיילדות וגניקולוגיה" style={{ height: 46, width: "auto", display: "block" }} />
          </a>
          <nav className="desktop-only" style={{ display: "flex", gap: 4, fontSize: 15, fontWeight: 500 }}>
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="h-nav" style={{ padding: "10px 14px", borderRadius: 999, color: "#0B2B2D", whiteSpace: "nowrap" }}>
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="tel:035114428" className="desktop-only h-cta" style={{ background: "#0E7C7F", color: "#FFFFFF", padding: "12px 20px", borderRadius: 999, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", transition: "background .2s" }}>
              לזימון תור
            </a>
            <button
              type="button"
              className="mobile-only"
              onClick={() => (open ? closeMenu() : openMenu())}
              aria-label="תפריט"
              style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: "#E1F3F2", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, padding: 0 }}
            >
              <span style={{ width: 18, height: 2, background: "#0B2B2D", borderRadius: 2 }} />
              <span style={{ width: 18, height: 2, background: "#0B2B2D", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </header>

      {mounted && (
        <div
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "rgba(11,43,45,0.35)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            padding: 10,
            display: "flex",
            alignItems: "flex-start",
            opacity: shown ? 1 : 0,
            pointerEvents: shown ? "auto" : "none",
            transition: "opacity .45s ease",
          }}
        >
          <div
            role="dialog"
            aria-label="תפריט"
            style={{
              position: "relative",
              width: "100%",
              clipPath: shown ? "circle(150% at 8% 32px)" : "circle(0% at 8% 32px)",
              WebkitClipPath: shown ? "circle(150% at 8% 32px)" : "circle(0% at 8% 32px)",
              transform: shown ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.98)",
              transformOrigin: "12% 0%",
              transition: "clip-path .7s cubic-bezier(.76,0,.24,1), -webkit-clip-path .7s cubic-bezier(.76,0,.24,1), transform .7s cubic-bezier(.76,0,.24,1)",
              maxHeight: "calc(100dvh - 20px)",
              background: "#FFFFFF",
              borderRadius: 28,
              display: "flex",
              flexDirection: "column",
              padding: "16px 20px calc(18px + env(safe-area-inset-bottom))",
              gap: 20,
              overflowX: "hidden",
              overflowY: "auto",
              overscrollBehavior: "contain",
              boxShadow: "0 30px 80px rgba(11,43,45,0.25)",
            }}
          >
            <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ position: "absolute", top: 40, left: -60, width: 200, opacity: 0.05, pointerEvents: "none" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a href="#home" onClick={() => closeMenu(true)} style={{ display: "flex", alignItems: "center", gap: 10, color: "#0B2B2D" }}>
                <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ width: 34, height: "auto", display: "block" }} />
                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>פרופ&apos; אייל שיינר</span>
                  <span style={{ fontSize: 12, color: "#557072" }}>מיילדות וגינקולוגיה</span>
                </span>
              </a>
              <button type="button" onClick={() => closeMenu()} aria-label="סגירה" style={{ width: 44, height: 44, borderRadius: "50%", border: "none", background: "#E1F3F2", color: "#0B2B2D", fontSize: 22, lineHeight: 1, cursor: "pointer" }}>
                ×
              </button>
            </div>
            <nav style={{ position: "relative", display: "flex", flexDirection: "column", marginTop: 8, borderTop: "1px solid #E1EEED" }}>
              {MENU.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="h-menu-link"
                  onClick={() => closeMenu(true)}
                  style={{
                    ...linkStyle,
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(14px)",
                    transition: `color .25s, padding .25s, opacity .5s ease ${(shown ? 1 : 0) * (180 + index * 55)}ms, transform .6s cubic-bezier(.2,.8,.2,1) ${(shown ? 1 : 0) * (180 + index * 55)}ms`,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#8FB7B5", minWidth: 20, fontVariantNumeric: "tabular-nums" }}>{String(index + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>{item.label}</span>
                </a>
              ))}
            </nav>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 14, opacity: shown ? 1 : 0, transform: shown ? "translateY(0)" : "translateY(14px)", transition: `opacity .5s ease ${(shown ? 1 : 0) * 600}ms, transform .6s cubic-bezier(.2,.8,.2,1) ${(shown ? 1 : 0) * 600}ms` }}>
              <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                {SOCIAL.map(({ href, label, Icon }) => (
                  <a key={label} href={href} aria-label={label} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid #CBE4E2", color: "#0E7C7F", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon />
                  </a>
                ))}
              </div>
              <a href="tel:035114428" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0E7C7F", color: "#FFFFFF", padding: "16px 20px", borderRadius: 18, fontWeight: 600, fontSize: 16 }}>
                <span>לזימון תור</span>
                <span dir="ltr" style={{ fontWeight: 500 }}>03-5114428</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
