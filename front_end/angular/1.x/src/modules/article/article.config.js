export default function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article/:slug',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'modules/article/article.html',
    title: 'Article',
    resolve: {
      currentUser: function(User, $state, $timeout) {
        return new Promise((resolve, reject) => {
          let currentUser = User.currentUser;
          if(currentUser) {
            resolve(currentUser);
          } else {
            $timeout(() => $state.go('app.login'), 0);
          }
        });
      },
      article: function(Articles, $state, $stateParams) {
        return Articles.get($stateParams.slug).then(
          (res) => res.data.article,
          (err) => $state.go('app.home')
        )
      }
    }
  })
}