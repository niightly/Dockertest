const routes = require('ike-router')(`${__dirname}/../app/controllers/`)

/////////////////
// Interceptor //
/////////////////
// TODO: routes.mountMiddleware(<interceptor>)

////////////////////
// Generic Routes //
////////////////////
routes.get('/status', 'status#index')

/////////////////////
// MOBILE APP      //
/////////////////////
//TODO:

/////////////////////
// ADMIN PANEL     //
/////////////////////
//TODO:

module.exports = routes.draw();
