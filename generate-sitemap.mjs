import { writeFileSync } from "node:fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "node:stream";

// List your canonical routes here
const routes = [
  "/", 
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/homeowners",
  "/agents",
  "/real-estate-investors",
  "/relief-division",
  "/for-sale-by-owner",
];

const baseUrl = "https://unlockedhomeproject.com";

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: baseUrl });

  const xml = await streamToPromise(
    Readable.from(routes.map(url => ({ url, changefreq: "monthly", priority: 0.8 }))).pipe(stream)
  ).then(data => data.toString());

  writeFileSync("./.output/public/sitemap.xml", xml);
  console.log("✅  Sitemap written to .output/public/sitemap.xml");
}

generateSitemap().catch(err => {
  console.error("❌  Sitemap generation failed:", err);
  process.exit(1);
});
