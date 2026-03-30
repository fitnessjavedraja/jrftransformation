# Javed Raja Fitness

This is a standalone version of the Canva-generated site, prepared to run outside Canva and deploy on Netlify.

## What changed

- Removed Canva-only SDK dependencies.
- Kept Tailwind CSS because the page already uses Tailwind classes.
- Switched the contact form to Netlify Forms.
- Replaced remote placeholder image URLs with local image files inside `images/`.

## Replace the sample images

Put your real images in the `images` folder and update the `src` values in `index.html` if you change filenames or file extensions.

## Run locally

From this folder, run:

```powershell
py -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy to Netlify

1. Create a new site in Netlify.
2. Drag and drop this folder, or connect a GitHub repo containing it.
3. If Netlify asks for a publish directory, use `.`
4. After deploy, open the `Forms` section in Netlify to view submissions.

## Editing later

- Change text directly in `index.html`.
- Replace photos in the `images` folder.
- Change colors or spacing in the CSS at the top of `index.html`.
