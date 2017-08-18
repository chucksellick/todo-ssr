'use strict';
const Router = require('express-promise-router');

module.exports = state => {

  const router = Router();

  router.use('/', require('./signin')(state));
  //router.use('/', require('./signout')(state));
  router.use('/', require('./signup')(state));
  //router.use('/', require('./todos')(state));
  //router.use('/', require('./welcome')(state));

  return router;

};
