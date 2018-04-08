import angular from 'angular';

import AppHeader from './header.component';
import AppFooter from './footer.component';

// Create the module where our functionality can attach to
let layoutModule = angular.module('app.layout', []);

// Components
layoutModule.component('appHeader', AppHeader);
layoutModule.component('appFooter', AppFooter);

export default layoutModule;
