'use strict';

require('angular');
require('angular-ui-router');
require('bootstrap/dist/css/bootstrap.css');
require('../css/site.css');

angular
    .module('app', ['ui.router']);

require('./app.route.js');

require('./main.component.js');
require('./home/home.component.js');
require('./assess/assess.component.js');
require('./assess/entities.component.js');
require('./assess/entity-selector.component.js');
require('./assess/finances.component.js');
require('./assess/commitments.component.js');
require('./assess/review.component.js');