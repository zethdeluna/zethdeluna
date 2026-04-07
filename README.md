# zethdeluna.com

My personal portfolio website — built from scratch, because why not?

My first instinct was to build a custom WordPress theme. As I was going through the initial setup, I kept thinking things like "Do I really need all these features?" and "It would be so much easier to just do something _completely_ custom." Couple that with my goal of getting better at React, and a few weeks later here we are.

## Tech Stack

- **Framework:** React TypeScript, scaffolded with Vite
- **Routing:** react-router-dom
- **Styling:** Vanilla CSS (custom properties, 12-column grid, the works)
- **Fonts:** Satoshi, Lastik
- **Hosting:** GitHub Pages
- **Domain:** ~$12/year. _Twelve dollars._

## Features

**Multi-page experience** — Built with React's virtual DOM paired with `react-router-dom` for client-side navigation. This was crucial since GitHub Pages is a static hosting service, and `react-router-dom` made the whole multi-page setup a whole lot simpler than the alternative.

**Page transitions** — A `PageTransition` component listens to the router's navigation state and fades a loading screen in and out between routes, with a little animated star to keep things fun.

**LunaScroll** — A custom wrapper component I built to handle scroll-triggered animations. Wrap it around anything you want to "bounce in" when it enters the viewport and you're done. Uses `useRef` to track elements, `useEffect` to set up scroll/resize listeners, and `useState` to toggle the `animate` class that CSS transitions off of.

```tsx
<LunaScroll animation="bounce-in">
  <SVG name="plumeria-smiley-heat" />
</LunaScroll>
```

**SVG component** — A centralized `SVG` component that maps string names to imported SVG assets. Keeps things clean and makes it easy to drop any icon into any component with a single prop.

**Project detail page builder** — Three reusable "module" components that I can mix and match to build project write-ups:
- `TextContent` — for the writing
- `FullWidthMedia` — for large images or videos
- `TwoColumnMedia` — for side-by-side images

## Pages

- **Home** — Hero with my name in big SVG lettering (hover over the letters!), a short intro, and a preview of recent work.
- **About** — A little more about me, my skills, and my favorite things. The favorite things section is interactive — click on any item to reveal what my actual favorite is.
- **Projects** — A full archive of my projects.
- **Contact** — The moon and stars said it best.

## Projects Featured

| Project | Description |
|---|---|
| CNC Machine Job Handler | Full-stack job orchestration platform. React + Node.js + PostgreSQL + Redis + WebSockets. |
| Math Comparator Game | Interactive React app that teaches kids math comparators through stacks of blocks. |
| zethdeluna.com | You're looking at it. |
| Expense Calendar | A React TypeScript expense tracker styled like a calendar. |

## Notes

All animations are handled almost entirely by CSS — the only JavaScript involved is the `LunaScroll` component for scroll-triggered stuff and a couple of targeted SVG manipulations in the hero sections. Keeping it lean on purpose.

The site is deployed via GitHub Pages, which means the build output goes into a `gh-pages` branch. If you fork this and want to do the same, just make sure your `vite.config` base path matches your repository name.

---

Thanks for stopping by and taking a look at the code! Feel free to reach out at [hey@zethdeluna.com](mailto:hey@zethdeluna.com) if you have any questions.
