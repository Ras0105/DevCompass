# DevCompass

Role-based developer roadmaps with relevance tags. Pick a role, then pick a stack path (MERN, PERN, FastAPI, Flask, Django, Spring Boot and more). Every path is its own tickable checklist, and your progress stays in your browser.

**DevCompass is open source and open for contributions.** The content (paths, checklist items, relevance tags) improves most when many developers from different markets review it. Fixes, new paths and corrections are all welcome.

## Features

- **5 roles:** Web developer, Frontend developer, Software developer, Full-stack developer, Backend developer.
- **51 paths:** each stack is listed separately, plus shared foundations and add-ons.
- **Relevance tags:** Essential, High demand, Growing, Situational, Niche, each with a one-line reason.
- **Filters:** by relevance and by section (Start here, Stack paths, Add-ons).
- **Saved in your browser** with `localStorage`: ticked items, the selected role, active filters and which paths are expanded. Nothing is sent to a server.
- Light and dark theme (follows your system), responsive layout, print-friendly.
- No build step, no dependencies, no framework.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and filter controls |
| `styles.css` | Layout, colours and dark theme (CSS variables at the top) |
| `app.js` | Roadmap data (`T` and `R` arrays), rendering and storage logic |
| `README.md` | This file |

## Contributing

Contributions of any size are welcome: a typo, a missing checklist item, a better "why it matters" line, or a whole new path.

### Ways to help

- **Improve a path:** add missing items, remove outdated ones, tighten wording.
- **Add a path:** for example data engineering, QA automation, cybersecurity, game development or embedded systems.
- **Review relevance tags:** if a tag does not match what you see in hiring in your country, open an issue with evidence.
- **Fix bugs or improve accessibility:** keyboard use, screen reader labels, contrast, mobile layout.
- **Build features:** see the ideas list below.

### How to contribute

1. Fork the repository and create a branch, for example `add-rails-path` or `fix-django-items`.
2. Make your change (see below for how the data is structured).
3. Open `index.html` in a browser and check your change in light and dark mode and on a narrow screen.
4. Open a pull request describing what you changed and why. For tag changes, include a source or your reasoning.

For larger changes, open an issue first so the approach can be agreed before you put in the work.

### Adding or editing a path

All content is at the top of `app.js`. Each path is one entry in the `T` array:

```js
["id", "Display name", "H", "One-line reason it matters.", ["Item 1", "Item 2"]]
```

The third value is the relevance code: `E` Essential, `H` High demand, `G` Growing, `S` Situational, `N` Niche.

To show a path for a role, add its `id` to that role's entry in the `R` array: `s` (start here), `p` (stack paths) or `a` (add-ons).

### Content guidelines

- Keep a path to about 5 to 7 items. Each item should be a skill someone can tick off, not a whole course.
- Name concrete tools and concepts, for example "Spring Data JPA, Hibernate, Flyway" rather than "database stuff".
- Write in plain, neutral language. No hype and no ranking of one tool as the "best" one.
- A relevance tag is a judgment about hiring demand. Back a tag change with a source, such as job listings or a recent survey, and say which country or market you mean.
- Each path should say who it suits in its "why it matters" line.
- Use sentence case and avoid marketing wording.

### Code guidelines

- Keep it dependency-free: plain HTML, CSS and JavaScript.
- Match the existing style. Colours go through the CSS variables at the top of `styles.css`, with both light and dark values.
- Wrap `localStorage` access in `try/catch`, since it can be unavailable.
- Keep interactive elements keyboard accessible, with a visible focus outline.
- Do not change a path's `id` or reorder its items without a reason. Saved ticks are keyed by path id and item position, so edits can shift users' saved progress. If you must restructure a path, mention it in your pull request.

### Ideas for contributions

- Learning resources and project ideas for each path
- Beginner, intermediate and job-ready levels within a path
- Export and import of progress
- Search across all paths
- Region-specific relevance notes
- Translations
- More paths: data engineering, QA automation, cybersecurity, game development, embedded systems

### Reporting problems

Open an issue and include: what you expected, what happened, your browser, and the role and path you were viewing. For content issues, say which item or tag and what you think it should be.

### Be kind

Be respectful and constructive in issues and pull requests. Assume good intent, and keep feedback about the work, not the person.

## Deploy

DevCompass is a static site, so any static host works:

- **GitHub Pages:** push the folder, then enable Pages for the branch.
- **Vercel or Netlify:** import the repository, no build command needed.

## About the relevance tags

The tags are an editorial judgment, not live job-board data. Demand varies by country and employer, so check listings in your target market before committing to a path. This is a main reason community review matters.

## License

Add a `LICENSE` file before publishing. MIT is a common choice for projects that welcome contributions.
