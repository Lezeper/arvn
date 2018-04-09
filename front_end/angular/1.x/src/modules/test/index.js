import angular from 'angular';
import TestCtrl from './test.controller';
import TestConfig from './test.config';
import TestDirective from './test.some.directive';

let testModule = angular.module('app.test', []);
testModule.controller('TestCtrl', TestCtrl);
testModule.config(TestConfig);
testModule.directive('phoneNumber', TestDirective);

export default testModule;