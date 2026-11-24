# Nroma Agency · Frontend

[Visit the Arabic website](https://nroma.co/ar/) · [Visit the English website](https://nroma.co/en/)

Selected production Astro components from Nroma's bilingual agency website. The live site above includes the complete experience. This repository is a source showcase.

## Explore the implementation

- [Homepage hero](src/components/home/Hero.astro) — localized slideshow with touch and keyboard navigation.
- [Services](src/components/home/Services.astro) and [agency introduction](src/components/home/AgencyIntro.astro) — the homepage sections and their responsive layouts.
- [About page components](src/components/about) — the agency story and its visual layout.
- [Localization](src/lib/i18n) — Arabic and English copy, route helpers, and translation lookup.
- [Global styles](src/styles/index.css) and [theme toggle](src/components/ThemeToggle.astro) — Tailwind CSS, typography, and light and dark themes.

The components use the site's own assets and Astro page context. For a working preview, use the live website.
