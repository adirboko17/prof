import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/972548045075"
      aria-label="שליחת הודעה בוואטסאפ"
      className="fab h-wa"
      style={{
        position: "fixed",
        zIndex: 45,
        left: "clamp(12px,2vw,24px)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 54,
        padding: "0 6px",
        borderRadius: 999,
        background: "#25D366",
        color: "#FFFFFF",
        boxShadow: "0 10px 28px rgba(37,211,102,0.35)",
        transition: "transform .25s, padding .3s",
      }}
    >
      <span style={{ width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <WhatsAppIcon />
      </span>
      <span className="desktop-only" style={{ fontSize: 15, fontWeight: 600, paddingInlineEnd: 14, whiteSpace: "nowrap" }}>
        דברו איתנו
      </span>
    </a>
  );
}
