class AppHeaderCtrl {
  constructor(AppConstants, $rootScope, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._User = User;
    this.currentUser = this._User.currentUser;
  }

  setCurrentUser(val) {
    this.currentUser = val;
  }

  logout() {
    this._User.logout();
  }
}

export default {
  controller: AppHeaderCtrl,
  templateUrl: 'modules/layout/header.html'
};
