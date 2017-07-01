'use strict';

require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/site.css');

angular
    .module('app', ['ui.router', 'ui.bootstrap']);

require('./app.route.js');

require('./main.component.js');
require('./home/home.component.js');

require('./assess/assess.component.js');

require('./assess/entities.component.js');
require('./assess/entity-selector.component.js');

require('./assess/finances.component.js');
require('./assess/add-modal.component.js');
require('./assess/remove-modal.component.js');

require('./assess/commitments.component.js');

require('./assess/review.component.js');