import angular from 'angular';
import ShowAuthed from './show-authed.directive';
import ListErrors from './list-errors.componenet';

let sharedModule = angular.module('app.shared', []);
sharedModule.directive('showAuthed', ShowAuthed);
sharedModule.component('listErrors', ListErrors);

export default sharedModule;