# FunkeLab Website

Website for the FunkeLab makerspace in Karlsruhe.

This project uses Astro, Tailwind CSS, and a small subset of the AstroWind component system. The original template scaffolding has been reduced to match the current site: a few static pages, shared layout components, and image/SEO utilities.

## Development

```bash
pnpm install
pnpm run dev
```

Useful commands:

- `pnpm run build` builds the static site into `dist/`
- `pnpm run preview` serves the production build locally
- `pnpm run check` runs Astro, ESLint, and Prettier checks
- `pnpm run fix` runs ESLint autofix and Prettier formatting

## Structure

- `src/pages/` contains the public routes for the site
- `src/components/widgets/` contains the page sections currently used by the site
- `src/layouts/` contains the base page wrappers
- `src/config.yaml` contains site metadata and SEO settings
- `src/navigation.ts` contains header and footer navigation

## Deployment

The site builds as a static Astro site.

Deployment-related files currently present in the repository:

- `vercel.json` for Vercel headers and URL behavior
- `Dockerfile` and `docker-compose.yml` for containerized static hosting via nginx

The production deployment currently uses Vercel.

## Notes

- The site configuration expects Node `24.x` in `package.json`
- The current hosted metadata is configured in `src/config.yaml`
- Vercel Analytics is enabled in the base layout; Google Analytics remains optional through config
