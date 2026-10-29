# Sunny Gogikar — The Series

A cinematic, streaming-inspired portfolio for Sunny Gogikar, Full-Stack Developer and B.Tech Computer Science and Engineering graduate. The React, TypeScript, and Vite project uses an original visual identity and a verified-content-only portfolio dataset.

## Run locally

Requires Node.js 18+.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Build and preview the production version:

```powershell
npm.cmd run build
npm.cmd run preview
```

## Portfolio content

Edit [`src/data/sunny.ts`](src/data/sunny.ts) to update the profile, projects, seasons, skills, credentials, highlights, and profile-specific section order. Only details supplied or verified for Sunny should be added. Technologies that need confirmation are marked separately; no dates, credentials, repository links, or contact URLs are inferred.

## Portfolio links and assets

- Resume: linked to the supplied Google Drive PDF in `src/data/sunny.ts`.
- Optional portrait: provide Sunny's photograph separately before wiring it into the hero.
- Contact details: Sunny's email, LinkedIn, and GitHub are linked in the profile data.
- Project metadata: supply actual stacks, implementation details, dates, and repository/demo URLs as available.
- Credentials: supplied Cisco and internship certificates are linked in the credentials section.

The existing portrait and PDF files under `public/assets` belong to a different person and are intentionally not used or overwritten.

## Stack and accessibility

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, and Lenis. Opening and project overlays support keyboard dismissal. Motion is reduced when `prefers-reduced-motion` is enabled, and horizontal rails retain touch scrolling.
