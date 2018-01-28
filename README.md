# This is the Tripriff Frontend


## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
    * `npm test` - runs the unit tests in the specs folder

## Fractal pattern Library

Fractal contains each of the individual components in our web app as well as the layouts and page demos (as needed). Read through the in-app fractal documentation for more information on our current setup and base rules.

**Recommended to use sass-lint when developing new components.**

* Documentation
    * [Fractal.build](https://fractal.build/guide)
* Run web UI
    * `fractal start`
