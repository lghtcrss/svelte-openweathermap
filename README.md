# Open Weather Map with SvelteKit

This is a basic example project with [SvelteKit](https://kit.svelte.dev/), svelte stores, a [chart.js](https://www.chartjs.org/) component and some api calls to [openweathermap.org](https://openweathermap.org/).

## Demo

A demo can be seen on [my test page](https://owm.eppinger.media).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
