# Package Manager Rule

Always use **pnpm** as the package manager for this project and all future projects.

- Never suggest or use `npm install`, `npm run`, or `npx` when `pnpm` equivalents exist.
- Use `pnpm install`, `pnpm run <script>`, `pnpm add`, `pnpm remove`, etc.
- When generating deployment configs (Hostinger, Vercel, Netlify, etc.), always set the package manager to `pnpm`.
- When writing README instructions, always show `pnpm` commands.
- The lockfile is `pnpm-lock.yaml` — never generate or commit `package-lock.json`.
