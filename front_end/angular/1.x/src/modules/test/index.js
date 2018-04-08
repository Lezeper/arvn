import angular from 'angular';
import TestCtrl from './test.controller';
import TestConfig from './test.config';

let testModule = angular.module('app.test', []);
testModule.controller('TestCtrl', TestCtrl);
testModule.config(TestConfig);

export default testModule;