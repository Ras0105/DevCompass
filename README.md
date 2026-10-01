# StackPath

Role-based developer roadmaps with relevance tags. Pick a role, then pick a stack path (MERN, PERN, FastAPI, Flask, Django, Spring Boot and more). Every path is its own tickable checklist, and your progress is saved in your browser.

## Features

- **5 roles:** Web developer, Frontend developer, Software developer, Full-stack developer, Backend developer.
- **51 paths:** each stack is listed separately, plus shared foundations and add-ons.
- **Relevance tags:** Essential, High demand, Growing, Situational, Niche, with a one-line reason for each path.
- **Filters:** filter by relevance and by section (Start here, Stack paths, Add-ons).
- **Progress tracking:** saved in `localStorage`. A path shared by several roles is ticked once.
- **Light and dark theme** (follows your system), responsive layout, print-friendly.
- No build step and no dependencies.

## Run it

Open `index.html` in a browser. To serve it locally instead:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and filter controls |
| `styles.css` | Layout, colours and dark theme (CSS variables at the top) |
| `app.js` | Data and rendering logic |

## Edit the content

All content lives at the top of `app.js`.

**Add or edit a path** in the `T` array:

```js
["id", "Display name", "H", "One-line reason it matters.", ["Item 1", "Item 2"]]
```

The third value is the relevance code: `E` Essential, `H` High demand, `G` Growing, `S` Situational, `N` Niche.

**Add a path to a role** in the `R` array by adding its `id` to that role's `s` (start here), `p` (stack paths) or `a` (add-ons) string.

Saved ticks are keyed by path id and item position. If you reorder or rewrite items in a path, existing ticks for that path may no longer line up. To reset everything, change the `KEY` value in `app.js` or clear the site's local storage.

## Deploy

It is a static site, so any static host works:

- **GitHub Pages:** push the folder, then enable Pages for the branch.
- **Vercel or Netlify:** import the repository, no build command needed.

## A note on the relevance tags

The tags are an editorial judgment as of late 2026, not live job-board data. Demand varies by country and employer, so check listings in your target market before committing to a path.

## Ideas for next steps

- Learning resources and project ideas for each path
- Beginner, intermediate and job-ready levels within a path
- Export and import of progress
- More paths: data engineering, QA automation, cybersecurity, game development, embedded systems
