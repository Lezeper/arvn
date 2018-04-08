export default class Articles {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getAll() {
    let request = {
      url: this._AppConstants.api + '/articles',
      method: 'GET'
    };
    return this._$http(request).then(res => res.data);
  }

  get(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug,
      method: 'GET'
    });
  }
}