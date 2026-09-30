# Annisa Aulia Zahra — Portfolio

## Initialize from scratch

```bash
npx create-next-app@15 annisa-portfolio --js --tailwind --app --eslint
cd annisa-portfolio
npm install framer-motion lucide-react
```

Replace the generated files with the files in this project, including `tailwind.config.js`, `postcss.config.js`, and the `app/` and `components/` directories.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The project uses the Next.js App Router and is ready to import into Vercel. The contact form posts to `/api/contact`; messages are validated, printed to the server console, and acknowledged without being persisted or emailed.

## Customize

- Replace the initials portrait placeholder in `components/Hero.jsx` with a profile image.
- Replace `public/Annisa-Aulia-Zahra-CV.pdf` with the latest CV.
- Edit the portfolio content in the corresponding files under `components/`.

## Stack

Next.js, React, Tailwind CSS, Framer Motion, and Lucide React.
