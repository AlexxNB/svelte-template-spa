# Svelte SPA Template

This is a project template for [Svelte](https://svelte.technology) Single Page Application. It lives at https://github.com/AlexxNB/svelte-template-spa.

It is based on [template](https://github.com/sveltejs/template) and [svelte-router](https://github.com/jikkai/svelte-router) as a router.

## Features
* Clear structure for new project
* Using Rollup
* Live Reload enabled for development
* Supporting for SCSS in SFC and external files.
* Integrated router with two way navigation possibility. No page reload.
    * Regular URLs (you need set rewrite rule on production server!).
    * URL with hash

## Installation

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit AlexxNB/svelte-template-spa svelte-spa
cd svelte-spa
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Routes

You can define routes in `routes.js` file:
```javascript
// Import all necessary view components here
import Home from './views/Home.html'
import About from './views/About.html'

export default{
	// hash - will handle URLs like localhost:8080/#/sub1/sub2
	// history - common URLs like localhost:8080/sub1/sub2 
	// Note: On production server you should manually set rewrite all requests to index.html
	mode: 'history',       

	// Each route should have imported component from views directory
	routes: {
		'/': Home,
		'/about': About
	}
}
```

## Get started

Install the dependencies...

```bash
cd svelte-spa
npm install
```

...then start rollup development server:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit any file in `src`, save it, and the page should reload with your changes.

## Building

```bash
npm run build
```

Then all you builded SPA files will be in `dist` directory.
