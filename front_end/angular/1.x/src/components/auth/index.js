import angular from 'angular';
import AuthCtrl from './auth.controller';
import AuthConfig from './auth.config';
 
let authModule = angular.module('app.auth', []);
authModule.controller('AuthCtrl', AuthCtrl);
authModule.config(AuthConfig);

export default authModule;