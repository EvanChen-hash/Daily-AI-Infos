const feedData = {
  generatedAt: "2026-06-14T16:36:59+09:00",
  range: "2026-05-15 to 2026-06-14",
  collector: {
    skill: "last30days v3.3.2",
    rawFile: "research/daily-ai-related-infos-tweets-official-announcements-short-videos-raw-dashboard.json",
    note: "The last30days run completed but returned no ranked candidates in this sandbox. Seed items below are verified from official pages and can be replaced with collector output.",
    coverage: [
      { source: "Official pages", status: "seeded" },
      { source: "X/Twitter", status: "authenticated via AUTH_TOKEN/CT0; official posts fetched" }
    ]
  },
  items: [
    {
      id: "openai-academy-2026-06-12",
      date: "2026-06-12",
      category: "Official",
      source: "OpenAI News",
      title: "OpenAI Academy adds AI Foundations, Applied AI Foundations, and Agents and Workflows",
      summary: "OpenAI framed the new courses around moving teams from basic AI fluency to repeatable workflows and agent-assisted work.",
      url: "https://openai.com/index/academy-courses-applying-ai-at-work/",
      impact: "Useful for tracking enterprise AI enablement and agent workflow education.",
      tags: ["OpenAI", "academy", "agents", "workflows"]
    },
    {
      id: "anthropic-directive-2026-06-12",
      date: "2026-06-12",
      category: "Official",
      source: "Anthropic News",
      title: "Anthropic says access to Claude Fable 5 and Mythos 5 is suspended",
      summary: "Anthropic posted an update saying it was suspending access to Claude Fable 5 and Claude Mythos 5 after a US government directive.",
      url: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      impact: "Important policy and availability signal for frontier-model monitoring.",
      tags: ["Anthropic", "Fable 5", "Mythos 5", "policy"]
    },
    {
      id: "openai-codex-black-holes-2026-06-11",
      date: "2026-06-11",
      category: "Hidden",
      source: "OpenAI News",
      title: "Codex astrophysics story includes a simulation video of plasma around a black hole",
      summary: "OpenAI described how Codex helps test algorithms for black-hole simulations, including a short supercomputer-simulation video asset.",
      url: "https://openai.com/index/using-codex-to-simulate-black-holes/",
      impact: "Good example of AI-assisted research storytelling with video-friendly scientific visuals.",
      tags: ["Codex", "science", "simulation", "video"]
    },
    {
      id: "anthropic-corps-2026-06-11",
      date: "2026-06-11",
      category: "Official",
      source: "Anthropic News",
      title: "Anthropic introduces Claude Corps",
      summary: "Anthropic announced Claude Corps, a national fellowship program for early-career people focused on extending AI benefits to US communities.",
      url: "https://www.anthropic.com/news",
      impact: "Tracks AI adoption programs beyond pure model releases.",
      tags: ["Anthropic", "education", "community"]
    },
    {
      id: "openai-oracle-2026-06-10",
      date: "2026-06-10",
      category: "Official",
      source: "OpenAI News",
      title: "OpenAI models and Codex will be accessible through Oracle Cloud commitments",
      summary: "OpenAI and Oracle announced a path for OCI customers to use existing Oracle Universal Credits for OpenAI models and Codex.",
      url: "https://openai.com/index/openai-on-oracle-cloud/",
      impact: "Enterprise procurement and deployment channel for OpenAI APIs and Codex.",
      tags: ["OpenAI", "Codex", "Oracle", "cloud"]
    },
    {
      id: "anthropic-fable-mythos-2026-06-09",
      date: "2026-06-09",
      category: "Official",
      source: "Anthropic News",
      title: "Anthropic launches Claude Fable 5 and Claude Mythos 5",
      summary: "Anthropic described Fable 5 as a Mythos-class model made safe for general use, with Mythos 5 initially available through Project Glasswing.",
      url: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
      impact: "Major frontier-model launch covering coding, knowledge work, vision, memory, and cyberdefense access.",
      tags: ["Anthropic", "model launch", "cybersecurity", "vision"]
    },
    {
      id: "openai-research-exchange-2026-06-08",
      date: "2026-06-08",
      category: "Official",
      source: "OpenAI News",
      title: "OpenAI announces the Economic Research Exchange",
      summary: "OpenAI listed a new Economic Research Exchange on its news page as part of its company updates.",
      url: "https://openai.com/news/",
      impact: "Relevant for tracking AI labor-market, productivity, and economic-impact research.",
      tags: ["OpenAI", "economics", "research"]
    },
    {
      id: "openai-memory-2026-06-04",
      date: "2026-06-04",
      category: "Official",
      source: "OpenAI News",
      title: "OpenAI publishes research on better memory for a more helpful ChatGPT",
      summary: "OpenAI listed a research item titled Dreaming: Better memory for a more helpful ChatGPT.",
      url: "https://openai.com/news/",
      impact: "Useful signal for personal-assistant memory and long-running interaction design.",
      tags: ["OpenAI", "memory", "ChatGPT"]
    },
    {
      id: "anthropic-glasswing-2026-06-02",
      date: "2026-06-02",
      category: "Official",
      source: "Anthropic News",
      title: "Anthropic expands Project Glasswing",
      summary: "Anthropic said it is extending Project Glasswing to around 150 organizations in more than fifteen countries.",
      url: "https://www.anthropic.com/news",
      impact: "Tracks trusted-access deployment of cyber-capable frontier models.",
      tags: ["Anthropic", "Project Glasswing", "cyberdefense"]
    },
    {
      id: "anthropic-opus-48-2026-05-28",
      date: "2026-05-28",
      category: "Official",
      source: "Anthropic News",
      title: "Claude Opus 4.8 launches with dynamic workflows and effort control",
      summary: "Anthropic announced Opus 4.8, dynamic workflows for Claude Code, effort control, and cheaper fast mode.",
      url: "https://www.anthropic.com/news/claude-opus-4-8",
      impact: "Directly relevant to agentic coding, long-running tasks, and developer workflow automation.",
      tags: ["Claude Code", "Opus 4.8", "agents", "developer tools"]
    },
    {
      id: "tweet-openai-codex-resets-2026-06-12",
      date: "2026-06-12",
      category: "Tweets",
      source: "@OpenAI",
      title: "OpenAI rolls out banked Codex rate-limit resets",
      summary: "OpenAI said Go, Plus, Pro, and Business users can save Codex rate-limit resets and use them later.",
      url: "https://x.com/OpenAI/status/2065225362544726371",
      impact: "Signals product tuning around Codex usage patterns and power-user scheduling.",
      tags: ["X", "OpenAI", "Codex", "rate limits"]
    },
    {
      id: "tweet-openai-codex-invites-2026-06-12",
      date: "2026-06-12",
      category: "Tweets",
      source: "@OpenAI",
      title: "OpenAI starts a two-week Codex invite loop",
      summary: "Plus and Pro users can invite up to three friends to try Codex, with both sides earning another banked reset after the first Codex message.",
      url: "https://x.com/OpenAI/status/2065225374737543376",
      impact: "Useful adoption signal for Codex distribution and referral mechanics.",
      tags: ["X", "OpenAI", "Codex", "growth"]
    },
    {
      id: "tweet-openaidevs-docs-agent-2026-06-12",
      date: "2026-06-12",
      category: "Tweets",
      source: "@OpenAIDevs",
      title: "OpenAI Devs introduces a docs agent",
      summary: "The OpenAI developer account said the new docs agent helps users find answers about OpenAI products and jump to relevant documentation.",
      url: "https://x.com/OpenAIDevs/status/2065507724704858173",
      impact: "Adds a developer-support surface that can feed directly into coding-agent workflows.",
      tags: ["X", "OpenAI", "docs", "developer tools"]
    },
    {
      id: "tweet-openaidevs-codex-workflow-2026-06-12",
      date: "2026-06-12",
      category: "Tweets",
      source: "@OpenAIDevs",
      title: "OpenAI Devs highlights parallel website edits with Codex",
      summary: "OpenAI Devs shared a Codex workflow where multiple parts of a website are updated in parallel, compressing a week of work into three days.",
      url: "https://x.com/OpenAIDevs/status/2065517012311593114",
      impact: "Concrete customer-style proof point for agentic coding productivity.",
      tags: ["X", "OpenAI", "Codex", "workflow"]
    },
    {
      id: "tweet-anthropic-directive-2026-06-13",
      date: "2026-06-13",
      category: "Tweets",
      source: "@AnthropicAI",
      title: "Anthropic posts export-control directive update",
      summary: "Anthropic said the US government issued a national-security directive suspending foreign-national access to Fable 5 and Mythos 5.",
      url: "https://x.com/AnthropicAI/status/2065597531644743999",
      impact: "Fast social confirmation of a major model-access and policy change.",
      tags: ["X", "Anthropic", "Fable 5", "Mythos 5", "policy"]
    },
    {
      id: "tweet-anthropic-claude-corps-2026-06-11",
      date: "2026-06-11",
      category: "Tweets",
      source: "@AnthropicAI",
      title: "Anthropic announces Claude Corps on X",
      summary: "Anthropic described Claude Corps as a national fellowship teaching 1,000 early-career people to use Claude with US nonprofits.",
      url: "https://x.com/AnthropicAI/status/2065057393927467084",
      impact: "Shows Claude adoption work moving through fellowships and nonprofit deployment.",
      tags: ["X", "Anthropic", "Claude", "fellowship"]
    },
    {
      id: "tweet-deepmind-robotics-accelerator-2026-06-12",
      date: "2026-06-12",
      category: "Tweets",
      source: "@GoogleDeepMind",
      title: "Google DeepMind launches Robotics Accelerator cohort",
      summary: "Google DeepMind said its Robotics Accelerator launched with 15 European startups using its AI stack and Gemini Robotics models.",
      url: "https://x.com/GoogleDeepMind/status/2065388989146628563",
      impact: "Tracks physical-AI adoption and startup access to Gemini Robotics tooling.",
      tags: ["X", "Google DeepMind", "robotics", "Gemini"]
    },
    {
      id: "tweet-deepmind-tacticai-palmeiras-2026-06-11",
      date: "2026-06-11",
      category: "Tweets",
      source: "@GoogleDeepMind",
      title: "Google DeepMind shares TacticAI work with Palmeiras",
      summary: "Google DeepMind said Palmeiras is building on TacticAI to simulate field scenarios and predict open-play dynamics up to eight seconds ahead.",
      url: "https://x.com/GoogleDeepMind/status/2065093482088169719",
      impact: "Good short-form signal for spatial AI, sports analytics, and robotics-adjacent modeling.",
      tags: ["X", "Google DeepMind", "TacticAI", "sports AI"]
    },
    {
      id: "youtube-shorts-monitor",
      date: "2026-06-14",
      category: "Hidden",
      source: "Video monitor",
      title: "Short-video source slot for AI demos and creator explainers",
      summary: "The dashboard includes a short-video category for YouTube Shorts, TikTok, and Instagram Reels once the collector has credentials or imported URLs.",
      url: "https://www.youtube.com/results?search_query=AI+tools+demo+shorts",
      impact: "Captures demo-led AI trends that do not appear first in official blogs.",
      tags: ["YouTube Shorts", "TikTok", "Instagram", "demo"]
    },
    {
      id: "meta-muse-spark-2026-04-08",
      date: "2026-04-08",
      category: "Hidden",
      source: "AI at Meta",
      title: "Meta introduces Muse Spark",
      summary: "Meta's AI blog featured Muse Spark and described it as scaling toward personal superintelligence.",
      url: "https://ai.meta.com/blog/",
      impact: "Older than the strict last-30-day window but included as a model for Meta source formatting.",
      tags: ["Meta", "research", "personal AI"]
    }
  ]
};

const state = {
  category: "All",
  source: "All",
  date: "All",
  query: "",
  selectedId: feedData.items[0]?.id
};

const visibleCategories = ["Official", "Tweets"];
const categoryOrder = ["All", ...visibleCategories];
const todayKey = new Date(feedData.generatedAt).toISOString().slice(0, 10);

const els = {
  runDate: document.querySelector("#runDate"),
  runRange: document.querySelector("#runRange"),
  runNote: document.querySelector("#runNote"),
  dateList: document.querySelector("#dateList"),
  searchInput: document.querySelector("#searchInput"),
  resetButton: document.querySelector("#resetButton"),
  sourceStatus: document.querySelector("#sourceStatus"),
  totalItems: document.querySelector("#totalItems"),
  officialItems: document.querySelector("#officialItems"),
  tweetItems: document.querySelector("#tweetItems"),
  videoItems: document.querySelector("#videoItems"),
  categoryFilters: document.querySelector("#categoryFilters"),
  sourceFilters: document.querySelector("#sourceFilters"),
  visibleCount: document.querySelector("#visibleCount"),
  feed: document.querySelector("#feed"),
  detailPanel: document.querySelector(".detail-panel"),
  detail: document.querySelector("#detail")
};

function formatDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${value}T12:00:00`));
}

function getFilteredItems() {
  const query = state.query.trim().toLowerCase();
  return feedData.items
    .filter((item) => visibleCategories.includes(item.category))
    .filter((item) => state.category === "All" || item.category === state.category)
    .filter((item) => state.source === "All" || item.source === state.source)
    .filter((item) => state.date === "All" || item.date === state.date)
    .filter((item) => {
      if (!query) return true;
      return [item.title, item.summary, item.source, item.category, item.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function groupedByDate(items) {
  return items.reduce((groups, item) => {
    groups[item.date] ||= [];
    groups[item.date].push(item);
    return groups;
  }, {});
}

function renderStats() {
  if (!els.totalItems || !els.officialItems || !els.tweetItems || !els.videoItems) return;
  const visibleItems = feedData.items.filter((item) => visibleCategories.includes(item.category));
  const todayItems = visibleItems.filter((item) => item.date === todayKey);
  els.totalItems.textContent = todayItems.length;
  els.officialItems.textContent = todayItems.filter((item) => item.category === "Official").length;
  els.tweetItems.textContent = todayItems.filter((item) => item.category === "Tweets").length;
  els.videoItems.textContent = new Set(visibleItems.map((item) => item.date)).size;
}

function renderRunStatus() {
  if (!els.runDate || !els.runRange || !els.runNote) return;
  els.runDate.textContent = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(feedData.generatedAt));
  els.runRange.textContent = feedData.range;
  els.runNote.textContent = feedData.collector.note;
}

function renderSourceStatus() {
  if (!els.sourceStatus) return;
  els.sourceStatus.innerHTML = feedData.collector.coverage
    .map((entry) => `
      <div class="source-status-row">
        <span>${entry.source}</span>
        <strong>${entry.status}</strong>
      </div>
    `)
    .join("");
}

function renderCategoryFilters() {
  const visibleItems = feedData.items.filter((item) => visibleCategories.includes(item.category));
  els.categoryFilters.innerHTML = categoryOrder
    .map((category) => {
      const count = category === "All"
        ? visibleItems.length
        : visibleItems.filter((item) => item.category === category).length;
      return `<button class="filter-button ${state.category === category ? "active" : ""}" data-category="${category}" type="button">${category} ${count}</button>`;
    })
    .join("");

  els.categoryFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function renderSourceFilters() {
  const sources = ["All", ...new Set(feedData.items.filter((item) => visibleCategories.includes(item.category)).map((item) => item.source))];
  els.sourceFilters.innerHTML = sources
    .map((source) => `<button class="source-chip ${state.source === source ? "active" : ""}" data-source="${source}" type="button">${source}</button>`)
    .join("");

  els.sourceFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.source = button.dataset.source;
      render();
    });
  });
}

function renderDates() {
  const visibleItems = feedData.items.filter((item) => visibleCategories.includes(item.category));
  const dates = [...new Set(visibleItems.map((item) => item.date).sort().reverse())];
  els.dateList.innerHTML = dates
    .map((date) => {
      const count = visibleItems.filter((item) => item.date === date).length;
      const label = formatDate(date);
      return `<button class="date-button ${state.date === date ? "active" : ""}" data-date="${date}" type="button"><span>${label}</span><strong>${count}</strong></button>`;
    })
    .join("");

  els.dateList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.date = button.dataset.date;
      render();
    });
  });
}

function renderFeed(items) {
  els.visibleCount.textContent = `${items.length} visible`;
  if (!items.length) {
    els.feed.innerHTML = `<div class="empty">No items match the current filters.</div>`;
    return;
  }

  const groups = groupedByDate(items);
  els.feed.innerHTML = Object.entries(groups)
    .map(([date, groupItems]) => `
      <section class="day-group">
        <div class="day-title">
          <span>${formatDate(date)}</span>
          <strong>${groupItems.length}</strong>
        </div>
        <div class="day-cards">${groupItems.map(renderCard).join("")}</div>
      </section>
    `)
    .join("");

  els.feed.querySelectorAll(".feed-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedId = card.dataset.id;
      renderDetail(card);
      els.feed.querySelectorAll(".feed-card").forEach((node) => node.classList.toggle("active", node.dataset.id === state.selectedId));
    });
  });
}

function renderCard(item) {
  return `
    <article class="feed-card ${item.id === state.selectedId ? "active" : ""}" data-id="${item.id}" data-category="${item.category}">
      <div class="card-body">
        <div class="meta-row">
          <span class="pill ${item.category === "Tweets" ? "tweet-pill" : "official-pill"}"><span class="tag-icon" aria-hidden="true">${item.category === "Tweets" ? "X" : "A"}</span>${item.category}</span>
          <span class="source">${item.source}</span>
        </div>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <div class="tags">${item.tags.slice(0, 4).map((tag) => `<span class="tag ${item.category === "Tweets" ? "tweet-tag" : "official-tag"}"><span class="tag-dot" aria-hidden="true"></span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function getSelectedCard() {
  return els.feed.querySelector(`.feed-card[data-id="${state.selectedId}"]`);
}

function positionDetailPanel(anchorCard) {
  if (!els.detailPanel || !anchorCard) return;

  const margin = 14;
  const gap = 12;
  const cardRect = anchorCard.getBoundingClientRect();
  const panelRect = els.detailPanel.getBoundingClientRect();
  const panelWidth = Math.min(360, window.innerWidth - margin * 2);
  const panelHeight = panelRect.height || 420;
  const rightX = cardRect.right + gap;
  const leftX = cardRect.left - panelWidth - gap;
  const canFitRight = rightX + panelWidth <= window.innerWidth - margin;
  const canFitLeft = leftX >= margin;
  let left = canFitRight ? rightX : canFitLeft ? leftX : Math.min(Math.max(cardRect.left, margin), window.innerWidth - panelWidth - margin);
  let top = cardRect.top;

  if (!canFitRight && !canFitLeft) {
    top = cardRect.bottom + gap;
  }

  top = Math.min(Math.max(top, margin), Math.max(margin, window.innerHeight - panelHeight - margin));
  els.detailPanel.style.width = `${panelWidth}px`;
  els.detailPanel.style.left = `${left}px`;
  els.detailPanel.style.top = `${top}px`;
  els.detailPanel.classList.add("visible");
}

function renderDetail(anchorCard = getSelectedCard()) {
  const item = feedData.items.find((entry) => entry.id === state.selectedId) || getFilteredItems()[0] || feedData.items[0];
  if (!item) {
    els.detail.innerHTML = `<p>No item selected.</p>`;
    return;
  }

  state.selectedId = item.id;
  els.detail.innerHTML = `
    <div class="detail-content">
      <div class="detail-kicker">
        <span class="pill">${item.category}</span>
        <time datetime="${item.date}">${formatDate(item.date)}</time>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <ul>
        <li><strong>Source:</strong> ${item.source}</li>
        <li><strong>Why it matters:</strong> ${item.impact}</li>
        <li><strong>Tags:</strong> ${item.tags.join(", ")}</li>
      </ul>
      <a class="detail-link" href="${item.url}" target="_blank" rel="noreferrer">Open source</a>
    </div>
  `;
  requestAnimationFrame(() => positionDetailPanel(anchorCard || getSelectedCard()));
}

function render() {
  const items = getFilteredItems();
  if (!items.some((item) => item.id === state.selectedId)) {
    state.selectedId = items[0]?.id || feedData.items[0]?.id;
  }
  renderCategoryFilters();
  renderSourceFilters();
  renderDates();
  renderFeed(items);
  renderDetail(getSelectedCard());
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

els.resetButton.addEventListener("click", () => {
  state.category = "All";
  state.source = "All";
  state.date = "All";
  state.query = "";
  els.searchInput.value = "";
  render();
});

renderStats();
renderRunStatus();
renderSourceStatus();
render();

window.addEventListener("resize", () => positionDetailPanel(getSelectedCard()));
document.addEventListener("scroll", () => positionDetailPanel(getSelectedCard()), true);
