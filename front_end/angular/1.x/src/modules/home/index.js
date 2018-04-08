import angular from 'angular';

import HomeConfig from './home.config';
import HomeCtrl from './home.controller';

// Create the module where our functionality can attach to
let homeModule = angular.module('app.home', []);

// Include our UI-Router config settings
homeModule.config(HomeConfig);
homeModule.controller('HomeCtrl', HomeCtrl);


export default homeModule;
