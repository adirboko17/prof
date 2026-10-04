import type { ReactNode } from "react";
import { Logo3D } from "./logo-3d";
import { FOOTER_SOCIAL } from "./icons";

const STATS = [
  ["+25", "שנות ניסיון"],
  ["+150", "מאמרים מדעיים"],
  ["11", "ספרי רפואה"],
  ["+1500", "נשים שלוו"],
] as const;

const ROLES = [
  ["כיום", "#0E7C7F", "יו”ר החטיבה למיילדות וגינקולוגיה, בית החולים סורוקה"],
  ["כיום", "#0E7C7F", "יו”ר וועדת הבחינה ביילוד וגניקולוגיה בהסתדרות הרפואית"],
  ["בעבר", "#557072", "סגן מנהל בית חולים סורוקה"],
  ["בעבר", "#557072", "סגן דיקן הפקולטה למדעי הבריאות"],
] as const;

function Check({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: onDark ? "rgba(255,255,255,0.16)" : "#D4F1EF",
        color: onDark ? "#FFFFFF" : "#0E7C7F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 700,
        marginTop: 1,
      }}
    >
      ✓
    </span>
  );
}

function StatPair() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, paddingInlineEnd: 28 }}>
      {STATS.map(([value, label]) => (
        <span key={label} style={{ display: "contents" }}>
          <span style={{ display: "flex", alignItems: "baseline", gap: 10, flexShrink: 0 }}>
            <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em", color: "#0B2B2D" }}>{value}</span>
            <span style={{ fontSize: 15, color: "#557072", whiteSpace: "nowrap" }}>{label}</span>
          </span>
          <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "#5EEEEE", flexShrink: 0 }} />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,48px)", paddingTop: "clamp(20px,4vw,56px)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
        <div style={{ flex: "1.2 1 340px", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>
          <h1 data-reveal="true" data-reveal-delay="80" style={{ margin: 0, display: "flex", flexDirection: "column", gap: "clamp(10px,1.4vw,18px)" }}>
            <span style={{ fontSize: "clamp(40px,5.4vw,78px)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em", color: "#0B2B2D" }}>פרופ&apos; אייל שיינר</span>
            <span style={{ fontSize: "clamp(20px,2vw,28px)", fontWeight: 300, lineHeight: 1.25, letterSpacing: "-0.01em", color: "#0E7C7F" }}>מומחה למיילדות, גינקולוגיה ופיריון</span>
          </h1>
          <p data-reveal="true" data-reveal-delay="180" style={{ margin: 0, fontSize: "clamp(18px,1.5vw,20px)", lineHeight: 1.65, color: "#36504F", maxWidth: 520, textWrap: "pretty" }}>
            מעל 25 שנות ניסיון בליווי נשים בהריון, לידות מורכבות, ניתוחים קיסריים וטיפול בהריונות בסיכון גבוה. כאן בשבילך – לכל שאלה, דאגה או ליווי רפואי מקצועי.
          </p>
          <div data-reveal="true" data-reveal-delay="260" style={{ display: "flex", gap: "14px 28px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#expertise" className="h-hero-btn" style={{ background: "#0B2B2D", color: "#FFFFFF", padding: "18px 30px", borderRadius: 14, fontWeight: 600, fontSize: 17, whiteSpace: "nowrap", transition: "background .25s, transform .25s" }}>
              תחומי ההתמחות
            </a>
            <a href="#about" className="h-text-link" style={{ fontSize: 17, fontWeight: 500, color: "#0B2B2D", borderBottom: "1.5px solid #8FCFCB", paddingBottom: 3, whiteSpace: "nowrap", transition: "border-color .25s, color .25s" }}>
              אודות פרופ&apos; שיינר
            </a>
          </div>
        </div>
        <div data-reveal="true" data-reveal-delay="140" style={{ flex: "1 1 300px", maxWidth: 560, marginInline: "auto", position: "relative" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "609/713" }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "80%", borderRadius: "999px 999px 32px 32px", background: "#17B1B1", overflow: "hidden" }}>
              <div style={{ position: "absolute", width: "120%", aspectRatio: "1/1", borderRadius: "50%", background: "#5EEEEE", left: "-10%", top: "72%" }} />
            </div>
            <div style={{ position: "absolute", width: "22%", aspectRatio: "1/1", borderRadius: "50%", background: "#5EEEEE", top: "8%", right: "-2%" }} />
            <div style={{ position: "absolute", inset: 0, clipPath: "inset(-50% 0 0 0 round 0 0 32px 32px)" }}>
              <img src="/assets/hero-portrait.webp" alt="פרופ' אייל שיינר" style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: "auto", display: "block", filter: "drop-shadow(0 24px 40px rgba(11,43,45,0.18))" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-only" data-reveal-stagger="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,150px),1fr))", rowGap: 6, borderTop: "1px solid #D6E8E7" }}>
        {STATS.map(([value, label]) => (
          <div key={label} style={{ padding: "22px 0 0 20px", display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{ fontSize: "clamp(30px,2.8vw,40px)", fontWeight: 600, letterSpacing: "-0.02em", color: "#0B2B2D" }}>{value}</span>
            <span style={{ fontSize: 15, color: "#557072" }}>{label}</span>
          </div>
        ))}
      </div>
      <div className="mobile-only stack" aria-label="+25 שנות ניסיון, +150 מאמרים מדעיים, 11 ספרי רפואה, +1500 נשים שלוו" style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #D6E8E7", borderBottom: "1px solid #D6E8E7", padding: "18px 0", WebkitMaskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)", maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
        <div className="stats-track" aria-hidden="true">
          <StatPair />
          <StatPair />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px,6vw,96px)", alignItems: "center" }}>
      <div style={{ flex: "1.4 1 420px", display: "flex", flexDirection: "column", gap: 28 }}>
        <h2 data-reveal="true" style={{ margin: 0, fontSize: "clamp(32px,3.4vw,48px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0B2B2D" }}>
          אודות פרופ&apos; אייל שיינר
        </h2>
        <p data-reveal="true" style={{ margin: 0, fontSize: "clamp(20px,1.9vw,25px)", fontWeight: 400, lineHeight: 1.5, color: "#0E7C7F", textWrap: "pretty" }}>
          פרופ&apos; אייל שיינר הוא רופא מומחה למיילדות, גינקולוגיה ופיריון, פרופסור מן המניין, וחוקר מוביל בתחום רפואת האם והעובר.
        </p>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 }}>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#36504F", textWrap: "pretty" }}>
            בעל ניסיון של למעלה מ-25 שנים בטיפול בנשים הרות, לידות מורכבות, ניתוחים קיסריים והריונות בסיכון גבוה. לאורך השנים, העניק טיפול מסור לאלפי נשים, תוך ליווי אישי ומקצועי מהשלבים הראשונים של ההיריון ועד לרגע הלידה.
          </p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#36504F", textWrap: "pretty" }}>
            בנוסף, הוא פעיל במחקר רפואי מתקדם, פרסם מאות מאמרים מדעיים בכתבי עת מובילים, חיבר 11 ספרי רפואה, ומרצה בכנסים רפואיים בינלאומיים.
          </p>
        </div>
        <div data-reveal="true" data-reveal-delay="120" style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#557072", paddingBottom: 6, borderBottom: "2px solid #0B2B2D" }}>תפקידים ומינויים</span>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", columnGap: 32 }}>
            {ROLES.map(([when, color, text]) => (
              <li key={text} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "20px 0", borderBottom: "1px solid #DDEDEC" }}>
                <span style={{ flexShrink: 0, minWidth: 52, fontSize: 13, fontWeight: 600, color }}>{when}</span>
                <span style={{ fontSize: 17, lineHeight: 1.5, color: "#0B2B2D" }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-photo" data-reveal="true" data-reveal-delay="120" style={{ flex: "1 1 320px", maxWidth: 520, marginInline: "auto", display: "flex", flexDirection: "column" }}>
        <img src="/assets/about-portrait.png" alt="פרופ' אייל שיינר" style={{ width: "100%", height: "auto", display: "block" }} />
        <div style={{ height: 2, background: "#0B2B2D", marginTop: -1 }} />
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760 }}>
        <h2 data-reveal="true" style={{ margin: 0, fontSize: "clamp(34px,4.4vw,64px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>
          תחומי ההתמחות
        </h2>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: "#36504F", textWrap: "pretty" }}>
          פרופ&apos; אייל שיינר מומחה במיילדות, גינקולוגיה והריונות בסיכון גבוה, ומספק טיפול רפואי מותאם אישית לנשים בכל שלבי ההיריון. עם ניסיון של למעלה מ-25 שנים, ידע קליני מעמיק ומחקר רפואי חדשני, הוא מלווה נשים בהריון, בלידה ובתהליכים רפואיים מורכבים.
        </p>
      </div>
      <div data-reveal-stagger="true" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        <div style={{ flex: "1.2 1 380px", background: "#0E7C7F", color: "#FFFFFF", borderRadius: "clamp(22px,3.2vw,32px)", padding: "clamp(26px,3.5vw,40px)", display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ margin: 0, fontSize: "clamp(26px,2.6vw,34px)", fontWeight: 700, lineHeight: 1.1 }}>הריונות בסיכון גבוה</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#CBE4E2" }}>פרופ&apos; שיינר מומחה בניהול והובלת הריונות מורכבים, כולל:</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {["היריון עם סוכרת הריונית או יתר לחץ דם", "היריון מרובה עוברים", "היסטוריה של לידות מוקדמות או סיבוכים בהריונות קודמים", "מצבים רפואיים שעלולים להשפיע על ההיריון"].map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.55 }}>
                <Check onDark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", background: "#FFFFFF", borderRadius: "clamp(22px,3.2vw,32px)", padding: "clamp(26px,3.5vw,40px)", display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ margin: 0, fontSize: "clamp(26px,2.6vw,34px)", fontWeight: 700, lineHeight: 1.1 }}>בדיקות ומעקב היריון מתקדם</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#36504F" }}>ליווי רפואי מקיף הוא המפתח להיריון בריא. פרופ&apos; שיינר מבצע מעקב הריון אישי, הכולל:</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, color: "#0B2B2D" }}>
            {["שקיפות עורפית ואולטרסאונד מתקדם", "הערכת משקל עוברית ומעקב התפתחות", "זרימות דם לעובר"].map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.55 }}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 320px", background: "#D4F1EF", borderRadius: "clamp(22px,3.2vw,32px)", padding: "clamp(26px,3.5vw,40px)", display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ margin: 0, fontSize: "clamp(26px,2.6vw,34px)", fontWeight: 700, lineHeight: 1.1 }}>ניתוחים קיסריים ולידות מורכבות</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#36504F" }}>פרופ&apos; שיינר ביצע מאות ניתוחים קיסריים ומומחה בביצוע הליכים כירורגיים מתקדמים, תוך דגש על בטיחות האם והיילוד.</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, color: "#0B2B2D" }}>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.55 }}>
              <Check />
              <span>ניתוחים קיסריים אלקטיביים ודחופים</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ["01", "מעקב הריון", "ליווי אישי ומקצועי לאורך כל שלבי ההיריון, משלב הגילוי ועד ללידה, לבריאות האם והעובר."],
  ["02", "מעקב הריון בסיכון גבוה", "מומחיות בניהול סיכונים בשלבים השונים ורפואת אם-עובר למקרים מורכבים במיוחד."],
  ["03", "אולטרסאונד תלת מימדי כולל תיארוך הריון", "הדמיות מתקדמות במיוחד למעקב מקיף אחר התפתחות תקינה של העובר."],
  ["04", "שקיפות עורפית והערכות משקל", "ביצוע בדיקות סקר גנטיות והערכת גדילה מקצועית ומדויקת."],
  ["05", "דיקורי מי שפיר", "בדיקות לפרופיל הגנטי באמצעות דיקור מי שפיר ברמת הבטיחות הגבוהה ביותר."],
  ["06", "ניתוחים קיסריים", "ניסיון עתיר בניתוחים קיסריים יזומים וחירומיים תוך דגש על שלוות היולדת והתאוששות."],
  ["07", "גניקולוגיה", "ייעוץ, אבחון וטיפול בכל תחומי רפואת הנשים ומניעה מוקדמת דרך מעקב שוטף."],
  ["08", "טיפולי פוריות", "אבחוני פוריות מקיפים ובניית תוכניות טיפול מותאמות אישית בדרך להורות."],
] as const;

export function Services() {
  return (
    <section id="Occupation" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,6vw,96px)", alignItems: "flex-start" }}>
      <div className="services-aside" data-reveal="true" style={{ flex: "1 1 300px", maxWidth: 420, display: "flex", flexDirection: "column", gap: 22 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>מה מקבלים בקליניקה</span>
        <h2 style={{ margin: 0, fontSize: "clamp(32px,3.6vw,50px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#0B2B2D" }}>השירותים בקליניקה</h2>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#E1F3F2", borderRadius: 16, padding: "16px 18px" }}>
          <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#0E7C7F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, marginTop: 1 }}>!</span>
          <span style={{ fontSize: 15, lineHeight: 1.55, color: "#0B2B2D" }}>שימו לב: הפרופסור אינו מבצע סקירות מערכות.</span>
        </div>
        <a href="tel:035114428" className="h-cta" style={{ alignSelf: "flex-start", background: "#0E7C7F", color: "#FFFFFF", padding: "16px 26px", borderRadius: 14, fontWeight: 600, fontSize: 16, whiteSpace: "nowrap", transition: "background .25s" }}>
          לזימון תור
        </a>
      </div>
      <div data-reveal-stagger="true" style={{ flex: "2 1 460px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", columnGap: 16, borderTop: "1px solid #D6E8E7" }}>
        {SERVICES.map(([num, title, text]) => (
          <div key={num} className="h-row" style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: 20, alignItems: "baseline", padding: "clamp(18px,2.4vw,26px) clamp(6px,1.6vw,20px)", borderBottom: "1px solid #D6E8E7", borderRadius: 18, transition: "background .3s, padding .3s" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#0E7C7F", minWidth: 28, fontVariantNumeric: "tabular-nums" }}>{num}</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: "clamp(19px,1.7vw,23px)", fontWeight: 600, lineHeight: 1.3, color: "#0B2B2D" }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "#557072", textWrap: "pretty" }}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WAZE = "https://waze.com/ul?q=%D7%90%D7%A7%D7%9C%D7%99%D7%A4%D7%98%D7%95%D7%A1%2033%20%D7%A2%D7%95%D7%9E%D7%A8";
const PILLS = ["בדיקות גניקולוגיות", "בירורי פיריון וטיפולים ראשוניים", "מעקבי היריון", "הערכות גדילה וזרימות", "שקיפות עורפית"];

export function Schedule() {
  return (
    <section id="schedule" style={{ display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>
      <div data-reveal="true" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 32px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>מיקום וזמנים</span>
          <h2 style={{ margin: 0, fontSize: "clamp(30px,3.4vw,46px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#0B2B2D" }}>קליניקה פרטית, אקליפטוס 33, עומר</h2>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href={WAZE} className="h-cta" style={{ background: "#0E7C7F", color: "#FFFFFF", padding: "14px 22px", borderRadius: 14, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", transition: "background .25s" }}>
            ניווט ב-Waze
          </a>
          <a href="tel:035114428" className="h-outline" style={{ background: "#FFFFFF", color: "#0B2B2D", border: "1px solid #CBE4E2", padding: "14px 22px", borderRadius: 14, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", transition: "background .25s" }}>
            לזימון תור
          </a>
        </div>
      </div>
      <div data-reveal-stagger="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "20px clamp(20px,3vw,40px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 16, borderTop: "1px solid #D6E8E7" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#0E7C7F" }}>הגעה</span>
          <span style={{ fontSize: 16, lineHeight: 1.6, color: "#36504F" }}>כניסה בשביל מימין לבית (לא דרך החצר)</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 16, borderTop: "1px solid #D6E8E7" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#0E7C7F" }}>טיפולים ומעקבים</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {PILLS.map((pill) => (
              <span key={pill} style={{ background: "#E1F3F2", color: "#0B2B2D", padding: "7px 12px", borderRadius: 999, fontSize: 14, whiteSpace: "nowrap" }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 16, borderTop: "1px solid #D6E8E7" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#0E7C7F" }}>קופות וביטוחים</span>
          <span style={{ fontSize: 16, lineHeight: 1.6, color: "#36504F" }}>פרופ&apos; שיינר עובד עם רשת הרופאים של כללית מושלם ומוכר ע״י ביטוחים פרטיים ורב הקופות.</span>
        </div>
      </div>
      <div data-reveal="true" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <div style={{ flex: "1.6 1 380px", position: "relative", height: "clamp(300px,34vw,420px)", borderRadius: 24, overflow: "hidden", background: "#E1F3F2" }}>
          <iframe data-src="https://my.matterport.com/show/?m=r2P9eTASfd5" title="סיור וירטואלי בקליניקה" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }} allowFullScreen />
          <span style={{ position: "absolute", top: 14, right: 14, background: "#FFFFFF", color: "#0B2B2D", padding: "7px 13px", borderRadius: 999, fontSize: 13, fontWeight: 600, pointerEvents: "none", boxShadow: "0 4px 14px rgba(11,43,45,0.12)" }}>סיור וירטואלי</span>
        </div>
        <div style={{ flex: "1 1 280px", position: "relative", height: "clamp(300px,34vw,420px)", borderRadius: 24, overflow: "hidden", background: "#E1F3F2" }}>
          <iframe data-src="https://www.google.com/maps?q=%D7%A4%D7%A8%D7%95%D7%A4%20%D7%90%D7%99%D7%99%D7%9C%20%D7%A9%D7%99%D7%99%D7%A0%D7%A8&output=embed&hl=he-IL&z=12" title="מפה" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, display: "block" }} />
        </div>
      </div>
    </section>
  );
}

const VIDEOS = ["2HqwyUlS-o0", "y31vrgRTpjw", "MaUf17fzGR4", "G8eX1kAmlXE", "FCogqqihVVE", "gkHhjXnj_tA"];

export function Media() {
  return (
    <section id="media" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div data-reveal-stagger="true" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start" }}>
        <div style={{ flex: "1.4 1 460px", background: "#FFFFFF", borderRadius: "clamp(22px,3.2vw,32px)", padding: "clamp(24px,4vw,44px)", display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>האזינו עכשיו</span>
          <h2 data-reveal="true" style={{ margin: 0, fontSize: "clamp(30px,3.6vw,48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            הפודקאסט שלנו
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#36504F", textWrap: "pretty" }}>
            פרופסור שיינר מגיש פודקאסט מרתק ומקצועי הכולל פרקים חדשים, טיפים, מענה לשאלות נפוצות, ומידע חיוני לנשים, הרות ויולדות.
          </p>
          <iframe className="spotify" data-src="https://open.spotify.com/embed/show/0OQnglgNAHROK4QMU7sZxB?utm_source=generator&theme=0" title="Spotify" allow="encrypted-media" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>@eyalsheiner</span>
            <h2 data-reveal="true" style={{ margin: 0, fontSize: "clamp(30px,3.6vw,48px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              הרילס האחרונים
            </h2>
          </div>
          <a href="https://www.instagram.com/eyalsheiner/" className="h-pill" style={{ fontSize: 15, fontWeight: 600, background: "#FFFFFF", padding: "10px 18px", borderRadius: 999, whiteSpace: "nowrap" }}>
            לעמוד האינסטגרם
          </a>
        </div>
        <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(min(42vw,220px),1fr)", gap: 12, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 6 }}>
          {["Reel 1", "Reel 2", "Reel 3", "Reel 4", "Reel 5"].map((label) => (
            <a key={label} href="https://www.instagram.com/eyalsheiner/" className="h-reel" style={{ position: "relative", aspectRatio: "9/16", borderRadius: 20, overflow: "hidden", background: "linear-gradient(160deg,#E1F3F2,#CBE4E2)", display: "flex", alignItems: "flex-end", padding: 14, transition: "transform .3s" }}>
              <span style={{ position: "absolute", top: 12, right: 12, width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.85)", color: "#0E7C7F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, paddingLeft: 2 }}>▶</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0E7C7F" }}>{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <h2 data-reveal="true" style={{ margin: 0, fontSize: "clamp(30px,3.6vw,48px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            סרטונים
          </h2>
          <a href="https://www.youtube.com/user/dagimyafim/videos" className="h-pill" style={{ fontSize: 15, fontWeight: 600, background: "#FFFFFF", padding: "10px 18px", borderRadius: 999 }}>
            לכל הסרטונים בערוץ
          </a>
        </div>
        <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(min(78vw,300px),32%)", scrollPaddingInline: 2, gap: 16, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 8, scrollbarWidth: "thin" }}>
          {VIDEOS.map((id) => (
            <a key={id} href={`https://www.youtube.com/watch?v=${id}`} className="h-yt" style={{ scrollSnapAlign: "start", position: "relative", display: "block", aspectRatio: "16/10", borderRadius: 24, overflow: "hidden", background: "#D4F1EF" }}>
              <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="סרטון" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <span style={{ position: "absolute", bottom: 14, right: 14, width: 48, height: 48, borderRadius: "50%", background: "#FFFFFF", color: "#0E7C7F", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>▶</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookScene({ children, glow }: { children: ReactNode; glow: string }) {
  return (
    <div style={{ position: "relative", height: "clamp(280px,30vw,360px)", borderRadius: 24, background: "#F2F8F8", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", width: "80%", aspectRatio: "1/1", borderRadius: "50%", background: glow, pointerEvents: "none" }} />
      <div style={{ perspective: 1400, height: "78%" }}>{children}</div>
    </div>
  );
}

const bookStyle = {
  position: "relative",
  height: "100%",
  transformStyle: "preserve-3d",
  transform: "rotateY(-24deg) rotateX(4deg)",
  transition: "transform .8s cubic-bezier(.2,.7,.2,1)",
} as const;

export function Books() {
  return (
    <section id="ami" style={{ background: "#FFFFFF", border: "1px solid #DDEDEC", borderRadius: "clamp(26px,4vw,40px)", padding: "clamp(24px,4.5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,48px)" }}>
      <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>ספרי ילדים</span>
        <h2 style={{ margin: 0, fontSize: "clamp(30px,3.4vw,46px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#0B2B2D" }}>ספרי הילדים של פרופ&apos; אייל שיינר</h2>
      </div>
      <div data-reveal-stagger="true" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(32px,4vw,56px)" }}>
        <article style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <BookScene glow="radial-gradient(circle, rgba(255,160,190,0.30) 0%, rgba(255,255,255,0) 68%)">
            <div className="h-book" style={{ ...bookStyle, aspectRatio: "1.2/1" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "3px 8px 8px 3px", overflow: "hidden", transform: "translateZ(11px)", boxShadow: "0 34px 60px -22px rgba(11,43,45,0.45), 0 14px 24px -12px rgba(11,43,45,0.25)" }}>
                <div role="img" aria-label="אן כמעט אחות גדולה" style={{ width: "100%", height: "100%", backgroundImage: "url('https://static.wixstatic.com/media/db159b_6a61e864daa04b52959aab3e0e1846f4~mv2.jpg/v1/fill/w_700,h_1048,al_c,q_85/file.jpg')", backgroundSize: "160% auto", backgroundPosition: "55% 40%", backgroundRepeat: "no-repeat" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,0) 86%, rgba(0,0,0,0.16) 93%, rgba(255,255,255,0.18) 96%, rgba(0,0,0,0.1) 100%)" }} />
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, width: 22, height: "100%", transformOrigin: "right center", transform: "translateZ(11px) rotateY(90deg)", backgroundImage: "url('https://static.wixstatic.com/media/db159b_6a61e864daa04b52959aab3e0e1846f4~mv2.jpg/v1/fill/w_700,h_1048,al_c,q_85/file.jpg')", backgroundSize: "auto 250%", backgroundPosition: "80% 45%", filter: "brightness(0.62) saturate(1.1)" }} />
              <div style={{ position: "absolute", top: "2%", left: 0, width: 22, height: "96%", transformOrigin: "left center", transform: "translateZ(11px) rotateY(-90deg)", background: "repeating-linear-gradient(90deg,#F4EEE6 0 2px,#E4DBCF 2px 3px)" }} />
            </div>
          </BookScene>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "0 4px" }}>
            <span style={{ alignSelf: "flex-start", background: "#FFF1E2", color: "#9A3F0C", padding: "6px 12px", borderRadius: 999, fontSize: 13, fontWeight: 600 }}>חדש</span>
            <h3 style={{ margin: 0, fontSize: "clamp(24px,2.4vw,32px)", fontWeight: 600, lineHeight: 1.2, color: "#0B2B2D", textWrap: "balance" }}>אן כמעט אחות גדולה!</h3>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#0B2B2D", textWrap: "pretty" }}>איך מספרים לילד שהוא כבר לא יהיה לבד? ״אן כמעט אחות גדולה!״ הוא הרבה יותר מסיפור. זה גשר רגשי בין עולמו של הילד לבין השינוי הגדול שבדרך.</p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#557072", textWrap: "pretty" }}>דרך עיניה של אן, ילדים לומדים להבין מה הם מרגישים באמת: שמחה, התרגשות, אבל גם קנאה וחשש…והכל לגיטימי. הספר מעניק להורים כלי פשוט, חכם ומבוסס הבנה פסיכולוגית, לעזור לילד שלהם לעבור את המעבר הזה בביטחון, ברוגע, ולצאת ממנו מחוזק כאח או אחות גדולה.</p>
            <blockquote style={{ margin: 0, padding: "14px 16px", borderRadius: 14, background: "#F2F8F8", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 15, lineHeight: 1.6, color: "#0B2B2D" }}>&quot;ספר ילדים מקסים, שמלווה ברגישות רבה את עולמה הרגשי של ילדה המתכוננת להפוך לאחות גדולה.&quot;</span>
              <span style={{ fontSize: 13, color: "#557072" }}>ד”ר אורית אלפי, מנהלת השירות הפסיכולוגי חינוכי בבאר שבע</span>
            </blockquote>
            <a href="https://www.olisafecare.com/product-page/%D7%90%D7%9F-%D7%9B%D7%9E%D7%A2%D7%98-%D7%90%D7%97%D7%95%D7%AA-%D7%92%D7%93%D7%95%D7%9C%D7%94" className="h-buy" style={{ alignSelf: "flex-start", marginTop: 6, background: "#0B2B2D", color: "#FFFFFF", padding: "15px 28px", borderRadius: 14, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", transition: "background .25s, transform .25s" }}>
              לרכישת הספר
            </a>
          </div>
        </article>
        <article style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <BookScene glow="radial-gradient(circle, rgba(255,170,70,0.28) 0%, rgba(255,255,255,0) 68%)">
            <div className="h-book" style={{ ...bookStyle, aspectRatio: "1/1" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "3px 8px 8px 3px", overflow: "hidden", transform: "translateZ(11px)", boxShadow: "0 34px 60px -22px rgba(11,43,45,0.45), 0 14px 24px -12px rgba(11,43,45,0.25)" }}>
                <img src="https://eyalsheiner.co.il/wp-content/uploads/2025/03/Mask-group.png" alt="הַמַּסָּע הַמֻּפְלָא שֶׁל אֶמִּי בַּבֶּטֶן שֶׁל אִמָּא" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,0) 86%, rgba(0,0,0,0.16) 93%, rgba(255,255,255,0.18) 96%, rgba(0,0,0,0.1) 100%)" }} />
              </div>
              <div style={{ position: "absolute", top: 0, right: 0, width: 22, height: "100%", transformOrigin: "right center", transform: "translateZ(11px) rotateY(90deg)", backgroundImage: "url('https://eyalsheiner.co.il/wp-content/uploads/2025/03/Mask-group.png')", backgroundSize: "cover", backgroundPosition: "right center", filter: "brightness(0.62) saturate(1.1)" }} />
              <div style={{ position: "absolute", top: "2%", left: 0, width: 22, height: "96%", transformOrigin: "left center", transform: "translateZ(11px) rotateY(-90deg)", background: "repeating-linear-gradient(90deg,#F4EEE6 0 2px,#E4DBCF 2px 3px)" }} />
            </div>
          </BookScene>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "0 4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 14, color: "#557072" }}>
                <span style={{ color: "#E8A13A", letterSpacing: 1 }}>★★★★★</span> 5.0 · 8 ביקורות
              </span>
            </div>
            <h3 style={{ margin: 0, fontSize: "clamp(24px,2.4vw,32px)", fontWeight: 600, lineHeight: 1.2, color: "#0B2B2D", textWrap: "balance" }}>הַמַּסָּע הַמֻּפְלָא שֶׁל אֶמִּי בַּבֶּטֶן שֶׁל אִמָּא</h3>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#0B2B2D", textWrap: "pretty" }}>לראשונה- סיפור ילדים מקסים על המסע המופלא ברחם עד הלידה! סיפור מרגש ומרתק על מסעה של אֶמִּי, עוברית קטנה שמתחילה את דרכה ברחם של אמא.</p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: "#557072", textWrap: "pretty" }}>דרך עיניה של אֶמִּי, הילדים נחשפים לתהליך הגדילה המופלא שמתרחש לאורך 40 שבועות –איך היא אוכלת, שומעת, גדלה, ובסופו של דבר נולדת. הסיפור נכתב על מנת להסביר לאן, נכדתו הגדולה, מה בדיוק עובר על אחותה, אֶמִּי, ברחם של אמא.</p>
            <blockquote style={{ margin: 0, padding: "14px 16px", borderRadius: 14, background: "#F2F8F8", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 15, lineHeight: 1.6, color: "#0B2B2D" }}>&quot;ככה זה כשפרופ׳ כותב ספר… הדרך הכי נעימה ללמוד מה שעובר על עובר ברחם, מפי איש שיודע…&quot;</span>
              <span style={{ fontSize: 13, color: "#557072" }}>טל ר., ביקורת קונה</span>
            </blockquote>
            <a href="https://www.olisafecare.com/product-page/%D7%94%D7%9E%D7%A1%D7%A2-%D7%94%D7%9E%D7%A4%D7%9C%D7%90-%D7%A9%D7%9C-%D7%90%D7%9E%D7%99-%D7%91%D7%91%D7%98%D7%9F-%D7%A9%D7%9C-%D7%90%D7%9E%D7%90-%D7%A1%D7%99%D7%A4%D7%95%D7%A8-%D7%99%D7%9C%D7%93%D7%99%D7%9D" className="h-buy" style={{ alignSelf: "flex-start", marginTop: 6, background: "#0B2B2D", color: "#FFFFFF", padding: "15px 28px", borderRadius: 14, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap", transition: "background .25s, transform .25s" }}>
              לרכישת הספר
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" style={{ background: "#0B2B2D", color: "#FFFFFF", borderRadius: "clamp(26px,4vw,40px)", padding: "clamp(28px,4.5vw,56px) clamp(22px,4.5vw,64px)", display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,80px)", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ flex: "1.4 1 340px", display: "flex", flexDirection: "column", gap: 26, position: "relative" }}>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#5EEEEE" }}>צור קשר</span>
          <h2 style={{ margin: 0, fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em" }}>לזימון תורים</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#CBE4E2", maxWidth: 460 }}>כאן בשבילך – לכל שאלה, דאגה או ליווי רפואי מקצועי.</p>
        </div>
        <a data-reveal="true" href="tel:035114428" className="h-phone" style={{ display: "flex", flexDirection: "column", gap: 6, color: "#FFFFFF", alignSelf: "flex-start", transition: "color .3s" }}>
          <span style={{ fontSize: 15, color: "#A9D6D3" }}>טלפון לזימון תורים</span>
          <span dir="ltr" style={{ fontSize: "clamp(34px,4vw,54px)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em", textAlign: "right" }}>03-5114428</span>
        </a>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(255,255,255,0.14)" }}>
          <a href="sms:0548045075" className="h-contact" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", transition: "padding .3s, color .3s" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 15, color: "#A9D6D3" }}>מזכירה אופיר</span>
              <span style={{ fontSize: 13, color: "#7FA9A6" }}>הודעת טקסט בלבד, נא לא להתקשר</span>
            </span>
            <span dir="ltr" style={{ fontSize: "clamp(16px,1.5vw,19px)", fontWeight: 500, whiteSpace: "nowrap" }}>054-8045075</span>
          </a>
          <a href="mailto:sheiner@bgu.ac.il" className="h-contact" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", transition: "padding .3s, color .3s" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 15, color: "#A9D6D3" }}>מייל</span>
            </span>
            <span dir="ltr" style={{ fontSize: "clamp(16px,1.5vw,19px)", fontWeight: 500, whiteSpace: "nowrap" }}>sheiner@bgu.ac.il</span>
          </a>
          <a href={WAZE} className="h-contact" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.14)", color: "#FFFFFF", transition: "padding .3s, color .3s" }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 15, color: "#A9D6D3" }}>קליניקה פרטית · ניווט</span>
              <span style={{ fontSize: 13, color: "#7FA9A6" }}>כניסה בשביל מימין לבית</span>
            </span>
            <span style={{ fontSize: "clamp(16px,1.5vw,19px)", fontWeight: 500, whiteSpace: "nowrap" }}>אקליפטוס 33, עומר</span>
          </a>
        </div>
      </div>
      <div data-reveal="true" data-reveal-delay="120" style={{ flex: "1 1 220px", maxWidth: "min(300px,50vw)", marginInline: "auto", aspectRatio: "1/1", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(94,238,238,0.18)" }} />
        <div style={{ position: "absolute", inset: "14%", borderRadius: "50%", background: "radial-gradient(circle, rgba(23,177,177,0.28) 0%, rgba(23,177,177,0) 70%)" }} />
        <div aria-hidden="true" style={{ width: "56%", aspectRatio: "1/1", perspective: 900 }}>
          <Logo3D depth={14} />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ maxWidth: 1320, margin: "0 auto", padding: "36px var(--page-gutter) 36px", display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, color: "#0B2B2D" }}>
          <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ width: 36, height: "auto", display: "block" }} />
          <span style={{ fontSize: 17, fontWeight: 700 }}>פרופ&apos; אייל שיינר</span>
        </a>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {FOOTER_SOCIAL.map(({ href, label, Icon }) => (
            <a key={label} href={href} aria-label={label} title={label} className="h-social" style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #CBE4E2", color: "#0E7C7F", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .25s,color .25s,border-color .25s,transform .25s" }}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px 20px", flexWrap: "wrap", fontSize: 14, color: "#557072", paddingTop: 18, borderTop: "1px solid #D6E8E7" }}>
        <span>© כל הזכויות שמורות לפרופסור אייל שיינר</span>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a href="https://hospitals.clalit.co.il/soroka/he/our-specialists/Pages/sheiner-e.aspx" className="h-muted" style={{ color: "#557072" }}>
            עמוד באתר כללית
          </a>
          <a href="/legal" className="h-muted" style={{ color: "#557072" }}>
            תנאי שימוש, פרטיות והצהרת נגישות
          </a>
        </div>
      </div>
    </footer>
  );
}
