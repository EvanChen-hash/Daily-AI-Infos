# Daily PJ Update - 2026-06-15

## Completed

- Fixed the collector to stamp refresh dates in `Asia/Tokyo` instead of raw UTC.
- Tightened Anthropic official-title extraction and added fallback title normalization for malformed official entries.
- Removed dead dashboard status/stats hooks that no longer exist in the HTML.
- Updated the README workflow schedule to match the actual GitHub Actions cron.
- Cleaned one top-level `.DS_Store` file; two nested `.DS_Store` files remain blocked by filesystem permissions.

## Files Changed

- `scripts/fetch-daily-ai-news.mjs`
- `app.js`
- `README.md`

## Validation

- Ran `npm run check`
- Result: passed

## Remaining Risk

- The scraper fix is syntax-checked but not end-to-end exercised against live source pages in this environment.
- Two ignored `.DS_Store` files under `.agents/` could not be removed due local permission restrictions.
