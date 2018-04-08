class HomeCtrl {
  constructor(User, AppConstants, $scope, Articles) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._user = User;
    this.currentUser = this._user.currentUser;

    Articles.getAll().then(res => {
      this.articles = res.articles;
    });
  }
}

export default HomeCtrl;
