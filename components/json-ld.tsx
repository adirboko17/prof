import { siteGraph } from "@/lib/site";

export function JsonLd() {
  const json = JSON.stringify(siteGraph()).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
