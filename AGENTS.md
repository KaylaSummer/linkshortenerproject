<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# LinkShortener Agent Instructions

This repository is a Next.js link-shortener application. For detailed guidelines on specific topics, refer to the modular documentation in the  `/docs` directory. ALWAYS refer to the relevant .md file BEFORE generating any code:


## Working Rules

- Inspect nearby code before editing and keep changes focused on the requested behavior.
- Preserve existing user changes. Do not reset, revert, or overwrite unrelated work.
- Treat `next.config.ts`, `proxy.ts`, `app/layout.tsx`, and `db/` as shared application boundaries. Check their callers and consumers before changing them.
- Keep server-only and client-only code separated. Add `"use client"` only when a component requires browser state, event handlers, or a client-only API.
- Never place secrets, database credentials, or Clerk secret keys in source files. Use environment variables and update documentation when a new variable is required.
- Do not add dependencies when an existing project dependency or platform API solves the problem adequately.
- Update tests or add focused coverage when changing behavior. At minimum, run `npm run lint` for source changes and `npm run build` for changes that affect routing, configuration, authentication, or database integration.

## Project Commands

```bash
npm run dev
npm run lint
npm run build
```

Database migrations and schema changes must follow the Drizzle workflow described in `docs/auth-and-data.md`. Do not edit generated output by hand.
