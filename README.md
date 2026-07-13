# The Method Trading VSL Landing Page

This folder is ready to upload to your existing GitHub repository and deploy on Vercel.

## Replace the current website

1. Back up or create a branch from the current repository.
2. Replace the repository contents with everything inside this folder.
3. Commit the changes to GitHub.
4. Vercel should detect Vite automatically and run `npm run build`.

Your Calendly URL is already connected to every **Book a Call** button:

`https://calendly.com/massimodeangelis8/30min`

## Add the VSL video

Open `src/App.tsx` and find:

```ts
const VSL_EMBED_URL = "";
```

Paste a YouTube embed URL between the quotation marks:

```ts
const VSL_EMBED_URL = "https://www.youtube.com/embed/VIDEO_ID";
```

Until a video is added, the site displays the branded Massimo-and-William poster.

## Run locally

```bash
npm install
npm run dev
```
