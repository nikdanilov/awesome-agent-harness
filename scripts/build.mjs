#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dataPath = resolve(root, "data/harnesses.json");
const readmePath = resolve(root, "README.md");

const data = JSON.parse(readFileSync(dataPath, "utf8"));
const shouldFetch = process.argv.includes("--fetch");

function shortLicense(spdx) {
  if (!spdx || spdx === "NOASSERTION") return "";
  if (spdx === "Apache-2.0") return "Apache";
  return spdx;
}

function formatStars(n) {
  if (!n) return "";
  if (n >= 1000) return `${Math.round(n / 1000)}k★`;
  return `${n}★`;
}

function isStale(pushedAt, referenceDate) {
  if (!pushedAt) return false;
  const diffDays = (new Date(referenceDate) - new Date(pushedAt)) / 86_400_000;
  return diffDays > 150;
}

function slug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/ /g, "-");
}

function alignTable(headers, rows) {
  const widths = headers.map((h, i) =>
    Math.max(h.length, 3, ...rows.map((r) => r[i].length))
  );
  const padRow = (cols) =>
    `| ${cols.map((c, i) => c.padEnd(widths[i])).join(" | ")} |`;
  const sep = `| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`;
  return [padRow(headers), sep, ...rows.map(padRow)].join("\n");
}

async function refreshGitHubStats() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "awesome-agent-harness-builder",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  for (const h of data.harnesses) {
    const res = await fetch(`https://api.github.com/repos/${h.repo}`, { headers });
    if (!res.ok) {
      console.warn(`Skipping ${h.repo}: HTTP ${res.status}`);
      continue;
    }
    const json = await res.json();
    h.stars = json.stargazers_count ?? h.stars;
    h.pushedAt = json.pushed_at ? json.pushed_at.slice(0, 10) : h.pushedAt;
    const spdx = json.license?.spdx_id;
    if (spdx && spdx !== "NOASSERTION") {
      h.license = spdx;
    }
  }

  data.updatedAt = new Date().toISOString().slice(0, 10);
  writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function buildMeta(h) {
  const parts = [];
  const stars = formatStars(h.stars);
  if (stars) parts.push(stars);
  if (isStale(h.pushedAt, data.updatedAt)) {
    parts.push("stale");
  } else {
    const lic = shortLicense(h.license);
    if (lic) parts.push(lic);
  }
  return parts.length ? ` *(${parts.join(" · ")})*` : "";
}

function buildTable(groupId) {
  const headers = ["Harness", "Mobile", "Browser", "Parallel", "Models"];
  const items = data.harnesses
    .filter((h) => h.tableGroup === groupId)
    .sort((a, b) => (b.stars || 0) - (a.stars || 0));

  const rows = items.map((h) => [
    `**${h.name}**${buildMeta(h)}`,
    h.mobile,
    h.browser,
    h.parallel,
    h.models,
  ]);
  return alignTable(headers, rows);
}

function buildReadme() {
  const toc = [
    "- [At a Glance](#at-a-glance)",
    ...data.categories.map((c) => `- [${c.title}](#${slug(c.title)})`),
  ];

  const sections = data.categories.map((cat) => {
    const items = data.harnesses
      .filter((h) => h.category === cat.id)
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    const bullets = items.map((h) => {
      const staleNote = isStale(h.pushedAt, data.updatedAt)
        ? ` *(last active ${h.pushedAt.slice(0, 7)})*`
        : "";
      const desc = h.description.endsWith(".")
        ? `${h.description.slice(0, -1)}${staleNote}.`
        : `${h.description}${staleNote}.`;
      return `- [${h.name}](https://github.com/${h.repo}) - ${desc}`;
    });

    return [`## ${cat.title}`, "", cat.summary, "", ...bullets].join("\n");
  });

  const md = [
    "# Awesome Agent Harness [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)",
    "",
    "> A curated list of AI agent harnesses—the execution runtimes wrapped around LLMs that own the agent loop, context management, tool calling, permissions, and workspace isolation.",
    "",
    "```text",
    "Agent = Model + Harness",
    "```",
    "",
    "Every project listed here **owns and executes the agent loop**. Adjacent infrastructure (standalone sandboxes, memory databases, observability platforms, prompt/skill packs, and general workflow frameworks) is intentionally excluded.",
    "",
    "## Contents",
    "",
    ...toc,
    "",
    "---",
    "",
    "## At a Glance",
    "",
    `Live GitHub snapshot (\`${data.updatedAt}\`), generated from [\`data/harnesses.json\`](data/harnesses.json).`,
    "",
    "### Coding Harnesses",
    "",
    buildTable("coding"),
    "",
    "### Agent Multiplexers & Control Planes",
    "",
    buildTable("multiplexers"),
    "",
    "### Always-On, Autonomous & Browser Harnesses",
    "",
    buildTable("always-on"),
    "",
    "---",
    "",
    ...sections.flatMap((s) => [s, ""]),
    "---",
    "",
    "## Contributing",
    "",
    "Contributions are welcome! Edit `data/harnesses.json` and run `node scripts/build.mjs`—see [CONTRIBUTING.md](CONTRIBUTING.md) for the scope test and guidelines.",
    "",
  ].join("\n");

  writeFileSync(readmePath, md, "utf8");
}

if (shouldFetch) {
  await refreshGitHubStats();
}
buildReadme();
console.log(`Generated README.md (${data.harnesses.length} harnesses, snapshot ${data.updatedAt})`);
