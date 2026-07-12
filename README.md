# Phúc — BA Portfolio (React + TypeScript + antd)

A React/TypeScript rebuild of the "spec document" style BA portfolio, using [Ant Design](https://ant.design) components (`Card`, `Timeline`, `Progress`, `Anchor`, `Table`, `Tag`, `Button`) with custom theme tokens to keep the ink/paper/redline/stamp look.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

The static output goes to `dist/`.

## Deploy (free)

**Vercel**
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → framework preset "Vite" is auto-detected.
3. Deploy. No config needed.

**Netlify**
1. Push to GitHub.
2. New site from Git → Build command `npm run build`, publish directory `dist`.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://<user>.github.io/<repo>"` and a script `"deploy": "gh-pages -d dist"`.
3. `npm run build && npm run deploy`.

## Project structure

```
src/
  data.ts                 ← all content (edit this to update copy)
  theme.ts                ← antd ConfigProvider theme tokens
  index.css               ← global styles, paper-grid background, custom classes
  App.tsx                 ← page shell, Anchor TOC, scroll progress
  components/
    DocBar.tsx             ← doc-control header strip
    Hero.tsx                ← name, tagline, contact buttons, stamp SVG
    SectionHead.tsx          ← numbered section heading helper
    ProcessSection.tsx        ← 5-step BA process grid
    Diagrams.tsx                ← inline SVG UML/ERD/use-case sketches
    CaseStudies.tsx               ← project case study cards
    SkillsMatrix.tsx                ← antd Progress bars + tool tags
    ExperienceEducation.tsx           ← antd Timeline
    RevisionFooter.tsx                  ← antd Table revision log
```

## Things still marked as TODO in the content

Two sticky-note style annotations are baked into the UI on purpose (in `data.ts` and `SkillsMatrix.tsx`) — resolve these before sending the link to a recruiter:

1. Add one measurable outcome to the capstone case study.
2. Back the Agile/Scrum skill claim with a concrete example, or lower the score.
