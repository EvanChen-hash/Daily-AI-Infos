import { readFile, writeFile } from "node:fs/promises";

const APP_FILE = new URL("../app.js", import.meta.url);
const now = new Date();
const JST_TIME_ZONE = "Asia/Tokyo";
const today = formatDateKey(now, JST_TIME_ZONE);

const sources = [
  {
    name: "OpenAI News",
    home: "https://openai.com/news/",
    match: /href="(\/(?:index|news)\/[^"]+)".{0,240}?>([^<]{12,140})</gis,
    tag: "OpenAI"
  },
  {
    name: "Anthropic News",
    home: "https://www.anthropic.com/news",
    match: /href="(\/news\/[^"]+)".{0,320}?aria-label="([^"]{12,180})"/gis,
    tag: "Anthropic"
  },
  {
    name: "Google DeepMind",
    home: "https://deepmind.google/discover/blog/",
    match: /href="(\/discover\/blog\/[^"]+)".{0,260}?>([^<]{12,140})</gis,
    tag: "Google DeepMind"
  }
];

function cleanTitle(value) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, "\"")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDateKey(value, timeZone) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function absoluteUrl(base, href) {
  return new URL(href, base).toString();
}

function makeId(source, title, url) {
  const slug = `${source}-${title}-${url}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
  return `auto-${slug}`;
}

function titleLooksGeneric(title) {
  return new Set(["announcements", "news", "blog", "research", "updates"]).has(title.toLowerCase());
}

function titleLooksLikeDate(title) {
  return /^(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+\d{1,2},\s+\d{4}$/i.test(title);
}

function titleFromUrl(url) {
  const slug = new URL(url).pathname.split("/").filter(Boolean).pop() ?? "";
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

function normalizeOfficialTitle(rawTitle, url) {
  const title = cleanTitle(rawTitle);
  if (!title || titleLooksGeneric(title) || titleLooksLikeDate(title)) {
    return titleFromUrl(url);
  }
  return title;
}

function sanitizeFeedItem(item) {
  if (item.category !== "Official") return item;
  const title = normalizeOfficialTitle(item.title, item.url);
  return {
    ...item,
    id: makeId(item.source, title, item.url),
    title
  };
}

async function fetchOfficialItems() {
  const items = [];
  for (const source of sources) {
    try {
      const response = await fetch(source.home, {
        headers: {
          "user-agent": "Daily-AI-Infos GitHub Action"
        }
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const html = await response.text();
      const seen = new Set();
      for (const match of html.matchAll(source.match)) {
        const url = absoluteUrl(source.home, match[1]);
        const title = normalizeOfficialTitle(match[2], url);
        if (!title || seen.has(url)) continue;
        seen.add(url);
        items.push({
          id: makeId(source.name, title, url),
          date: today,
          category: "Official",
          source: source.name,
          title,
          summary: `Official update detected from ${source.name}.`,
          url,
          impact: "Daily official-source refresh item. Review source for full context.",
          tags: [source.tag, "official", "daily refresh"]
        });
        if (seen.size >= 4) break;
      }
    } catch (error) {
      console.warn(`[warn] ${source.name}: ${error.message}`);
    }
  }
  return items;
}

function extractFeedData(appText) {
  const match = appText.match(/const feedData = (\{[\s\S]*?\n\});\n\nconst state = /);
  if (!match) throw new Error("Could not locate feedData in app.js");
  return Function(`"use strict"; return (${match[1]});`)();
}

function replaceFeedData(appText, feedData) {
  const next = `const feedData = ${JSON.stringify(feedData, null, 2)};\n\nconst state = `;
  return appText.replace(/const feedData = \{[\s\S]*?\n\};\n\nconst state = /, next);
}

const appText = await readFile(APP_FILE, "utf8");
const feedData = extractFeedData(appText);
const existing = new Map(feedData.items.map((item) => [item.url, sanitizeFeedItem(item)]));
const freshItems = await fetchOfficialItems();

for (const item of freshItems) {
  existing.set(item.url, item);
}

feedData.generatedAt = now.toISOString();
feedData.range = `${today} daily refresh`;
feedData.collector.note = "Updated by the daily GitHub Actions refresh. Official announcements are fetched automatically; X refresh can be extended with repository secrets.";
feedData.items = [...existing.values()]
  .filter((item) => ["Official", "Tweets", "Hidden"].includes(item.category))
  .sort((a, b) => `${b.date}-${b.id}`.localeCompare(`${a.date}-${a.id}`))
  .slice(0, 80);

await writeFile(APP_FILE, replaceFeedData(appText, feedData));
console.log(`Updated app.js with ${freshItems.length} fetched official items.`);
