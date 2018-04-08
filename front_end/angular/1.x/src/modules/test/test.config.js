export default ($stateProvider) => {
  'ngInject';
  
  $stateProvider.state('app.test', {
    url: '/test',
    controller: 'TestCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'modules/test/test.html'
  });
}