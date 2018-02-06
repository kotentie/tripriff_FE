'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'TripRiff Component Library');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Julian Mullins');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/app/fractal/scss');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/app/fractal/docs');

// /* Tell Fractal where the static assets live */
fractal.web.set('static.path', __dirname + '/app/fractal/static');

/* Tell Fractal the default preview wrapper to use */
fractal.components.set('default.preview', '@preview');

/* Tell Fractal where to build the static directory */
fractal.web.set('builder.dest', __dirname + '/componentlibrary');

//use BrowserSync when the server is started
fractal.web.set('server.sync', true);
