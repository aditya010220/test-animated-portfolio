<h1 align="center">Afzal Imdad - Portfolio</h1>

Simple Next.js portfolio site (static export with PWA support). Demo: <a href="http://afzalimdad9.vercel.app" target="_blank">afzalimdad9.vercel.app</a>.

<div align="center">
  <img src="./public/assets/portfolio.gif" alt="Portfolio Demo" width="100%" />
</div>

## Run locally

```sh
pnpm install   # or npm install
pnpm run dev   # start at http://localhost:3000
```

Build for production (outputs `.next` / export per config):

```sh
pnpm run build
pnpm run start   # serve the built app
```

## Where public assets are used

- Icons: manifest uses icons/192.png, 384.png, 512.png; favicon is /assets/ai.svg; apple/icon links also point to icons/192.png (see pages/_document.js and public/manifest.json).
- Images: /assets/profile.jpg appears in header avatar and "My Self" section; /assets/arrow-sample.svg is the Contact background stripe.
- Docs/media: /assets/cv.pdf is opened by the header CV button; README preview uses /assets/portfolio.gif.
- Logos: aws.png, docker.png, smit.png in Certifications; streeviewtrusted.png in Maps Contribution.

## Editing content

- Core data lives in `utils/*` (header, myself, certifications, maps, projects, etc.).
- Main page layout is in `pages/index.js`; adjust section order or visibility there.

## Contributing

Feel free to fork and improve. If you use it, a shout-out to **@afzalimdad9** is appreciated.
