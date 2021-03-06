// FAVICONS & IMAGES
require.context('./components', true, /^\.\//);
require.context('./favicons', true, /^\.\//);
require.context('./views', true, /^\.\//);

// TEMPLATES
require.context('./', true, /\.html$/);

// CSS & SCSS
require("!style!css!sass!./index.scss");

// JS NODE_MODULES
require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-stripe');

// For some reason this is necessary to get moment to work
window.moment = require('moment');

// JS APP SCRIPTS
require('./index.js');
require('./index.config.js');
require('./index.routes.js');

// JS VIEW CONTROLLERS
require('./views/StripeToken/StripeTokenCtrl.js');
require('./views/StripeApp/StripeAppCtrl.js');

// JS COMPONENTS
require('./components/Footer/Footer.js');
require('./components/Newsletter/Newsletter.js');
require('./components/AppHeader/AppHeader.js');

// JS SERVICES
require('./services/card-history.service.js');
require('./services/stripe-cards.service.js');
