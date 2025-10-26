# Movie App Clone

A lightweight movie/TV browsing UI built with React + Vite. It demonstrates a small media discovery app with feature components, a custom fetch hook, and responsive UI powered by Tailwind CSS.

## Key features
- Home page with featured movie / media slides
- Media list and detail pages (movie, TV show, people)
- Search form with filters (genres, media type)
- Reusable UI components: MovieCard, Header, Loading, Image, CircularProgressBar
- Modal provider pattern for global modal usage
- Small custom data-fetch hook (useFetch) for API calls

## Tech stack
- React (JSX) + Vite
- Tailwind CSS
- PostCSS
- Vanilla JavaScript utilities and hooks

## Project structure (important files)
- src/
  - component/ — UI components and feature subfolders (FeatureMovie, MediaDetail, MediaList, SearchForm, ...)
  - context/ — ModalProvider
  - hooks/ — useFetch
  - libs/ — constants and helpers
  - pages/ — route pages (HomePages, MovieDetail, TVShowDetail, PeoplePage, SearchPage)
  - index.css, main.jsx — app entry
- public/fonts/ — bundled fonts

## Environment
Create a `.env` file in the project root (Vite loads `.env` by default). Typical variables used by media apps:
```
VITE_API_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
Adjust variable names if your code expects different keys (search `import.meta.env` in the code).

## Install & Run
1. Install dependencies
   - npm: `npm install`
   - yarn: `yarn`

2. Run dev server
   - npm: `npm run dev`
   - yarn: `yarn dev`
   Open the URL shown by Vite (default http://localhost:5173).

3. Build for production
   - npm: `npm run build`
   - Preview build: `npm run preview`

## Notes & tips
- API: If the app uses The Movie Database (TMDB), supply a valid API key and ensure rate limits are respected.
- Images: optimize large assets; the project uses an Image component — check placeholder / lazy-loading behavior.
- Components: MediaDetail contains many subcomponents (ActorList, SeasonList, RelatedMediaList) — reuse them when adding features.
- Hooks: `useFetch` centralizes fetching logic; extend it for caching, aborting, or error handling if needed.
- Accessibility: ensure interactive elements (buttons/links) have appropriate labels/alt text for images.

## Contributing
Feel free to open issues or submit PRs for bug fixes, feature requests, or performance improvements.

## License
Add your preferred license. (No license file included by default.)
