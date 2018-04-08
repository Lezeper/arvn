export default class User {
  constructor(JWT, $http, $state, $q, AppConstants, $rootScope) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;
    this._$rootScope = $rootScope;

    this.currentUser = null;
  }

  attemptAuth(type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      (res) => {
        this._JWT.save(res.data.user.token);
        this.currentUser = res.data.user;
        this._$rootScope.$broadcast('user', res.data.user);
        return res;
      }
    );
  }

  getUser(token) {
    return this._$http({
      url: this._AppConstants.api + '/user',
      method: 'GET'
    })
  }

  verifyAuth() {
    if(!this.currentUser) {
      if(this._JWT.get()) {
        this.getUser(this._JWT.get()).then((res) => {
          this.currentUser = res.data.user;
          this._$rootScope.$broadcast('user', res.data.user);
          return Promise.resolve(true);
        },
      (err) => {
        this._JWT.destroy();
        return Promise.resolve(false);
      });
      } else {
        return Promise.resolve(false);
      }
    } else {
      return Promise.resolve(false);
    }
  }

  logout() {
    this.currentUser = null;
    this._JWT.destroy();
    this._$state.go(this._$state.$current, null, { reload: true });
  }
}