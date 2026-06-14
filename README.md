# Daily AI Infos

A static GitHub Pages dashboard for daily AI-related information.

The app shows:

- Official AI announcements
- Verified X/Twitter posts
- Horizontal date columns
- Category, source, date, and text filters

## Local Preview

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/index.html
```

## GitHub Pages

This repo is configured for GitHub Pages through `.github/workflows/daily-ai-news.yml`.

The workflow:

- Runs daily at `22:10 UTC`
- Can be triggered manually with `workflow_dispatch`
- Runs `npm run update:news`
- Commits refreshed `app.js` data if changed
- Deploys the static site to GitHub Pages

## Optional Secrets

For future X/Twitter refresh support, add these repository secrets:

```text
AUTH_TOKEN
CT0
```

Do not commit real tokens.
