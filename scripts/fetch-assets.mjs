// Copies the images still hosted on Framer's CDN into public/work/, then prints the
// replacements to make so the site no longer depends on Framer. Run: npm run assets
import { mkdir, writeFile } from "node:fs/promises";

const assets = {
  "ee.png": "https://framerusercontent.com/images/q6TCm4lSgm6ShO7kLs7VCvHY4o.png",
  "chameleon-cover.jpg": "https://framerusercontent.com/images/UCQJvZo2PCNk50KPUxMo0iypQ.jpg",
  "chameleon-brands.jpg": "https://framerusercontent.com/images/BhWPH5KKPK881v6ogcJQxKTais.jpg",
  "xoda-biz.png": "https://framerusercontent.com/images/KF6NnfJ65MhOUotVteNpVEhcMYo.png",
  "xoda-integration.png": "https://framerusercontent.com/images/vHmKGmqeQH8B40aLdp81cQ9PpU.png",
  "xoda-prototype.png": "https://framerusercontent.com/images/IdJrvvFV679twDdwjPo1Gsjmz4.png",
  "ee-cv.pdf": "https://framerusercontent.com/assets/LDNmPzepR62komUPYvadC90lXJU.pdf",
};

await mkdir("public/work", { recursive: true });
for (const [name, url] of Object.entries(assets)) {
  const res = await fetch(url);
  if (!res.ok) { console.error("failed", name, res.status); continue; }
  await writeFile(`public/work/${name}`, Buffer.from(await res.arrayBuffer()));
  console.log("saved public/work/" + name);
}
console.log("\nNow replace each framerusercontent URL in content/ and components/Portrait.tsx with /work/<file>, and remove images.remotePatterns from next.config.mjs.");
