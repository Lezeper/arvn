import angular from 'angular';
import 'angular-ui-router';

// Import our app config files
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

import './config/app.templates';
import './modules'
import './service';


// Create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.home',
  'app.services',
  'app.auth',
  'app.article',
  'app.shared',
  'app.test'
];

// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
