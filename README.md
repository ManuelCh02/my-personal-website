# My Personal Website

Personal portfolio site built with React and Vite. Two-column layout on desktop — hero, nav, and social links stay fixed in a sticky sidebar while the rest of the content scrolls next to it.

Live: https://manuch.dev

## Stack

- React 19
- Vite 8
- Plain CSS + CSS Modules
- ESLint

## Getting started

```bash
git clone https://github.com/ManuelCh02/my-personal-website.git
cd my-personal-website
npm install
npm run dev
```

Opens at `http://localhost:5173`.

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── main.jsx
├── App.jsx              # layout + experience data
├── index.css            # theme variables, fonts, breakpoints
├── components/
│   ├── Hero.jsx
│   ├── SocialMedia.jsx
│   ├── PageNavigation.jsx
│   ├── Main.jsx
│   ├── About.jsx
│   ├── Experience.jsx / ExperienceCard.jsx
│   ├── Projects.jsx / ProjectCard.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── Footer.jsx
└── styles/
    └── *.module.css
```

## How it's put together

`App.jsx` holds the sidebar (`Hero`, `PageNavigation`, `SocialMedia`) and the main content (`Main`, `Footer`). Work experience lives as a plain array in `App.jsx` and gets passed down through `Main → Experience → ExperienceCard`, which maps over it to render each entry — no experience data is hardcoded in the components themselves.

`PageNavigation` just links to section IDs (`#about`, `#experience`, `#projects`, `#skills`, `#education`) set on each section inside `Main`.

Styling is mobile-first: base styles target small screens, then `index.css` adds layout changes at `768px` and `992px`. The two-column sticky layout only kicks in at `992px` and up.

## Editing content

- Name/title/tagline → `Hero.jsx`
- Social links → `SocialMedia.jsx`
- Work history → the `experienceData` array in `App.jsx`
- Projects → `ProjectCard.jsx`
- Skills list → `Skills.jsx`
- Education → `Education.jsx`

## Not done yet

Certifications section (commented out in `Education.jsx`) and a Cloud/Tooling skills category (commented out in `Skills.jsx`) — both planned but not added.

---
Built by [ManuelCh02](https://github.com/ManuelCh02)