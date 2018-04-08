angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title ng-bind=\"pageTitle\"></title>\n    <base href=\"/\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\">\n    <link rel=\"stylesheet\" href=\"bundle.css\">\n  </head>\n  <body>\n    \n    <div ui-view></div>\n\n    <script src=\"main.js\"></script>\n\n  </body>\n</html>\n");
$templateCache.put("components/article/article.html","<p>{{$ctrl.article.title}}</p>\n<p>{{$ctrl.article.body}}</p>");
$templateCache.put("components/auth/auth.html","<form ng-submit=\"$ctrl.submitForm()\">\n  <input type=\"text\" ng-show=\"$ctrl.authType === \'register\'\" ng-model=\"$ctrl.formData.username\"/>\n  <input type=\"email\" ng-model=\"$ctrl.formData.email\"/>\n  <input type=\"password\" ng-model=\"$ctrl.formData.password\"/>\n  <button type=\"submit\" ng-bind=\"::$ctrl.title\"></button>\n</form>");
$templateCache.put("components/home/home.html","<div>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" ng-repeat=\"article in $ctrl.articles\">\n      <a ui-sref=\"app.article({ slug: article.slug })\" ng-bind=\"::article.title\"></a>\n    </li>\n  </ul>\n</div>");
$templateCache.put("components/layout/app-view.html","<div class=\"container\">\n  <app-header></app-header>\n\n  <div ui-view></div>\n  \n  <app-footer></app-footer>\n</div>");
$templateCache.put("components/layout/footer.html","<footer>\n  <div id=\"footer\">\n    <a ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\n    <span>\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n");
$templateCache.put("components/layout/header.html","<div ng-show=\"$ctrl.currentUser\">\n  <p>Hello! {{$ctrl.currentUser.username}}</p>\n  <button ng-click=\"$ctrl.logout()\">Logout</button>\n</div>\n\n<div ng-show=\"!$ctrl.currentUser\">\n    <a ui-sref=\"app.login\">Have an account?</a>\n    <a ui-sref=\"app.register\">Need an account?</a>\n</div>");}]);