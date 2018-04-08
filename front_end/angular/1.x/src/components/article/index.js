import angular from 'angular';
import ArticleConfig from './article.config';
import ArticleCtrl from './article.controller';

let articleModule = angular.module('app.article', []);
articleModule.config(ArticleConfig);
articleModule.controller('ArticleCtrl', ArticleCtrl);

export default articleModule;