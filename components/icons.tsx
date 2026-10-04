import type { SVGProps } from "react";

function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function TikTokIcon() {
  return (
    <Svg>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.2 4.4 5 4.6" />
    </Svg>
  );
}

export function InstagramIcon() {
  return (
    <Svg>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </Svg>
  );
}

export function YouTubeIcon() {
  return (
    <Svg>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l4 2.5-4 2.5z" fill="currentColor" />
    </Svg>
  );
}

export function SpotifyIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 9.5c3-1 6.5-.7 9 .8" />
      <path d="M8 12.6c2.4-.7 5-.5 7.2.7" />
      <path d="M8.6 15.5c1.8-.5 3.7-.3 5.3.5" />
    </Svg>
  );
}

export function FacebookIcon() {
  return (
    <Svg>
      <path d="M15 3.5h-2.2A3.8 3.8 0 0 0 9 7.3V10H6.5v3.5H9V21h3.5v-7.5H15l.6-3.5h-3.1V7.6c0-.5.4-.9.9-.9H15z" />
    </Svg>
  );
}

export function A11yIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M5 8.5c2.3.7 4.6 1 7 1s4.7-.3 7-1" />
      <path d="M12 9.5v4.5" />
      <path d="M12 14l-3 6" />
      <path d="M12 14l3 6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const SOCIAL = [
  { href: "https://www.tiktok.com/@prof_eyal_sheiner", label: "TikTok", Icon: TikTokIcon },
  { href: "https://www.instagram.com/eyalsheiner/", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.youtube.com/user/dagimyafim", label: "YouTube", Icon: YouTubeIcon },
  { href: "https://open.spotify.com/show/0OQnglgNAHROK4QMU7sZxB", label: "Spotify", Icon: SpotifyIcon },
] as const;

export const FOOTER_SOCIAL = [
  SOCIAL[0],
  SOCIAL[1],
  {
    href: "https://www.facebook.com/p/%D7%A4%D7%A8%D7%95%D7%A4-%D7%90%D7%99%D7%99%D7%9C-%D7%A9%D7%99%D7%99%D7%A0%D7%A8-100071931724190/",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  SOCIAL[2],
  SOCIAL[3],
] as const;
