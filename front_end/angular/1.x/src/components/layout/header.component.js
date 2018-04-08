class AppHeaderCtrl {
  constructor(AppConstants, $rootScope, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._User = User;
    this.currentUser = User.currentUser;

    $rootScope.$on('user', () => {
      this.currentUser = User.currentUser;
    })
  }

  logout() {
    this._User.logout();
  }
}

export default {
  controller: AppHeaderCtrl,
  templateUrl: 'components/layout/header.html'
};
