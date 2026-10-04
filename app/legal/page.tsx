import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש, פרטיות והצהרת נגישות",
  description: "תנאי השימוש, מדיניות הפרטיות והצהרת הנגישות של אתר פרופ' אייל שיינר. המידע באתר אינו תחליף לייעוץ רפואי. עדכון: פברואר 2026.",
  alternates: {
    canonical: "/legal",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "סיכום האתר למודלי שפה" },
        { url: "/llms-full.txt", title: "סיכום מלא למודלי שפה" },
      ],
    },
  },
  openGraph: {
    locale: "he_IL",
    url: "/legal",
    title: "תנאי שימוש, פרטיות והצהרת נגישות",
    description: "תנאי השימוש, מדיניות הפרטיות והצהרת הנגישות של אתר פרופ' אייל שיינר.",
  },
};

const card = {
  scrollMarginTop: 110,
  background: "#FFFFFF",
  border: "1px solid #DDEDEC",
  borderRadius: "clamp(22px,3vw,32px)",
  padding: "clamp(24px,4.5vw,56px)",
  display: "flex",
  flexDirection: "column",
  gap: 28,
} as const;

const block = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingTop: 22,
  borderTop: "1px solid #DDEDEC",
} as const;

function CheckItem({ children }: { children: string }) {
  return (
    <li style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#F2F8F8", borderRadius: 14, padding: "14px 16px", fontSize: 15, lineHeight: 1.6 }}>
      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#0E7C7F", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function LegalPage() {
  return (
    <div style={{ minHeight: "100vh", color: "#0B2B2D", background: "#F2F8F8" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 30, padding: "14px var(--page-gutter) 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(14,124,127,0.10)", borderRadius: 999, padding: 8, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, boxShadow: "0 8px 30px rgba(11,43,45,0.06)" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, paddingInlineStart: 10, color: "#0B2B2D" }}>
            <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ width: 36, height: "auto", display: "block" }} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
              <span style={{ fontSize: 17, fontWeight: 700 }}>פרופ&apos; אייל שיינר</span>
              <span style={{ fontSize: 12, color: "#557072" }}>מיילדות וגינקולוגיה</span>
            </span>
          </a>
          <a href="/" className="h-legal-back" style={{ background: "#E1F3F2", color: "#0E7C7F", padding: "12px 20px", borderRadius: 999, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap" }}>
            חזרה לאתר
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(36px,6vw,72px) var(--page-gutter) 48px", display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,44px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0E7C7F" }}>מידע משפטי</span>
          <h1 style={{ margin: 0, fontSize: "clamp(32px,4.4vw,56px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance" }}>תנאי שימוש, מדיניות פרטיות והצהרת נגישות</h1>
          <span style={{ fontSize: 15, color: "#557072" }}>תאריך עדכון ההצהרה והתקנון: פברואר 2026.</span>
        </div>

        <nav aria-label="ניווט בעמוד" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            ["#terms", "תנאי שימוש"],
            ["#privacy", "מדיניות פרטיות"],
            ["#accessibility", "הצהרת נגישות"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="h-legal-pill" style={{ background: "#FFFFFF", border: "1px solid #DDEDEC", color: "#0B2B2D", padding: "11px 18px", borderRadius: 999, fontSize: 15, fontWeight: 500, whiteSpace: "nowrap" }}>
              {label}
            </a>
          ))}
        </nav>

        <section id="terms" style={card}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px,3vw,38px)", fontWeight: 600, letterSpacing: "-0.01em" }}>תנאי שימוש באתר</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#36504F", textWrap: "pretty" }}>ברוכים הבאים לאתרו של פרופסור אייל שיינר (להלן: &quot;האתר&quot;). הגלישה והשימוש באתר כפופים לתנאים המפורטים להלן. עצם הגלישה באתר מהווה הסכמה מצדך לתנאים אלו.</p>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>1.</span> מידע כללי ורפואי (היעדר אחריות רפואית)</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>המידע המופיע באתר נועד לספק רקע כללי ואינפורמטיבי בלבד אודות תחומי העיסוק של פרופסור אייל שיינר וחומר רפואי להעשרה (כגון סרטונים ופודקאסטים). המידע אינו מהווה תחליף לייעוץ רפואי מקצועי, אבחנה, או טיפול רפואי פרטני בשום פנים ואופן. בכל שאלה רפואית, היריון בסיכון, או מצב חירום, יש לפנות באופן מיידי לרופא מטפל או למוקד רפואי. ההסתמכות על המידע המופיע באתר היא על אחריות המשתמש בלבד, ובעל האתר לא יישא בשום אחריות לכל נזק מכל סוג שהוא שיגרם למשתמש או לצד ג&apos; עקב הסתמכות על תוכן האתר.</p>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>2.</span> קניין רוחני</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>כל זכויות היוצרים והקניין הרוחני באתר, לרבות טקסטים, עיצובים, לוגו, קוד, סרטונים ומידע המועלה לאתר, הינם בבעלותו הבלעדית של פרופסור אייל שיינר (או של צדדים שלישיים שהעניקו לו הרשאה מפורשת). אין להעתיק, לשכפל, להפיץ, להציג בפומבי או לעשות כל שימוש מסחרי בתכני האתר ללא אישור מראש ובכתב מבעל האתר.</p>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>3.</span> הגבלת אחריות וצדדים שלישיים</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>האתר עשוי להכיל קישורים (Links) או הטמעות (Iframes) של אתרים או שירותים חיצונים (כגון YouTube, TikTok, Google Maps, Matterport, Spotify ועוד). הימצאותם של רכיבים אלה אינה מהווה הבעת תמיכה, אחריות או אישור של בעל האתר לתוכן המוצג בהם. אין לנו שליטה או אחריות על התוכן, תנאי השימוש או מדיניות הפרטיות של אותם אתרים, והשימוש בהם נעשה באחריותך בלבד תוך הסכמה לתנאי השימוש של אותם צדדים שלישיים.</p>
          </div>
        </section>

        <section id="privacy" style={card}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px,3vw,38px)", fontWeight: 600, letterSpacing: "-0.01em" }}>מדיניות פרטיות</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#36504F", textWrap: "pretty" }}>אנו מכבדים את פרטיותם של הגולשים באתרנו ומחויבים להגן עליה, תוך הקפדה על חוק הגנת הפרטיות, התשמ&quot;א-1981.</p>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>1.</span> איסוף וניהול נתונים</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>האתר במתכונתו הנוכחית אינו דורש הרשמה ואינו אוסף מידע רפואי רגיש או פרטים פיננסיים. כל יצירת קשר מתבצעת ישירות מול טלפון המרפאה או הדוא&quot;ל באופן חיצוני למערכות האתר. פרטים הנמסרים במסגרת יצירת קשר עם המרפאה נשמרים תחת חיסיון רפואי מלא כמתחייב בחוק ואינם מועברים לצדדים שלישיים ללא הסכמה, למעט מקרים בהם נדרש הדבר על פי דין.</p>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>2.</span> קבצי (Cookies) ושירותים חיצונים</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>האתר עשוי לעשות שימוש בשירותים של צדדים שלישיים (כגון כלי אנליטיקה למדידת טראפיק, רכיבי וידאו ומדיה חברתית המסופקים דרך צד ג&apos;) אשר עשויים לשתול קבצי &quot;Cookies&quot; איסוף מזהים אנונימיים (כגון כתובת IP או נתוני דפדפן) למטרות הפעלה, אבטחה וסטטיסטיקה. באפשרותך לשנות את הגדרות התוכנה בדפדפן בכל עת ולמנוע את שמירת קבצי ה-Cookies.</p>
          </div>
        </section>

        <section id="accessibility" style={card}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(26px,3vw,38px)", fontWeight: 600, letterSpacing: "-0.01em" }}>הצהרת נגישות</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#36504F", textWrap: "pretty" }}>אנו רואים חשיבות עליונה בהנגשת האתר לאנשים עם מוגבלויות. המטרה שלנו היא להעניק שוויון הזדמנויות ומתן שירות נגיש, מכבד ואופציונלי לכלל האוכלוסייה, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלויות, תשנ&quot;ח-1998 והתקנות על פיו.</p>
          </div>
          <div style={{ ...block, gap: 12 }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>1.</span> רמת הנגישות באתר</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>השקענו משאבים כדי שהאתר יהיה מונגש ומותאם. אתר זה הונגש, ככל האפשר, ומרבית הרכיבים בו עומדים לרמת התקן הישראלי 5568 ברמה AA (המקביל לתקן הבינלאומי WCAG 2.1). בוצעו התאמות ברמת הקוד להבטחת תאימות:</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: 8 }}>
              <CheckItem>תמיכה מובנית בקוראי מסך (Screen Readers) למשתמשים לקויי ראייה.</CheckItem>
              <CheckItem>שימוש בתיוג כותרות היררכי ונכון מבנית (H1-H3).</CheckItem>
              <CheckItem>הוספת תגיות Title לרכיבי צד שלישי המושתלים באתר (Iframes).</CheckItem>
              <CheckItem>התאמת ניגודיות (קונטרסט) גבוהה המסייעת לקריאת התכנים בנוחות.</CheckItem>
              <CheckItem>אפשרות הפעלה שוטפת במקלדת (Tab Navigation).</CheckItem>
            </ul>
          </div>
          <div style={block}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>2.</span> הסתייגות לשירותי צד שלישי ומדיה</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>חשוב לזכור: באתר מוטמעים רכיבי מולטימדיה רבים המסופקים ממקורות חיצונים (כגון נגנים של YouTube, TikTok, אובייקטים של Matterport לסיורים וירטואליים ועוד). אין באפשרותנו להבטיח נגישות מוחלטת לתוכן שהוא באחריות ובשליטת ספקים חיצונים, אולם פעלנו לספק מעטפת נגישה ככל הניתן עד לרמת הטמעת הכלים.</p>
          </div>
          <div style={{ ...block, gap: 14 }}>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}><span style={{ color: "#0E7C7F" }}>3.</span> פניות בנושא נגישות והצעה לשיפור ולעזרה</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.85, color: "#36504F", textWrap: "pretty" }}>למרות המאמצים להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים ספציפיים שאינם נגישים במלואם. במידה ונתקלתם בקושי לגלוש באתר, מתקשים בקריאת המידע או שיש לכם הצעה לשיפור הנגישות, אנו מזמינים אתכם לפנות אלינו ונעשה את מירב המאמצים לטפל בבקשתכם.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 10 }}>
              <a href="tel:0548045075" className="h-legal-dark" style={{ background: "#0B2B2D", color: "#FFFFFF", borderRadius: 18, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 14, color: "#A9D6D3" }}>טלפון (מזכירות)</span>
                <span dir="ltr" style={{ fontSize: 22, fontWeight: 600, textAlign: "right" }}>054-804-5075</span>
              </a>
              <a href="mailto:sheiner@bgu.ac.il" className="h-legal-soft" style={{ background: "#E1F3F2", color: "#0B2B2D", borderRadius: 18, padding: "20px 22px", display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 14, color: "#557072" }}>דוא&quot;ל</span>
                <span dir="ltr" style={{ fontSize: 20, fontWeight: 600, textAlign: "right" }}>sheiner@bgu.ac.il</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ maxWidth: 1100, margin: "0 auto", padding: "12px var(--page-gutter) 40px", display: "flex", justifyContent: "space-between", gap: "10px 20px", flexWrap: "wrap", fontSize: 14, color: "#557072" }}>
        <span>© כל הזכויות שמורות לפרופסור אייל שיינר</span>
        <a href="/" className="h-muted" style={{ color: "#557072" }}>חזרה לעמוד הבית</a>
      </footer>
    </div>
  );
}
