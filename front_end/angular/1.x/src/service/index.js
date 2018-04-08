import angular from 'angular';
import JwtService from './jwt.service';
import UserService from './user.service';
import ArticleService from './articles.service';

let servicesModule = angular.module('app.services', []);

servicesModule.service('JWT', JwtService);
servicesModule.service('User', UserService);
servicesModule.service('Articles', ArticleService);

export default servicesModule;