export class LoginService {
  constructor($log, $http, $window, constantManager, mockService, localStorageService, $q) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.$window = $window;
    this.$q = $q;

    this.constantManager = constantManager;
    this.localStorageService = localStorageService;
    this.mockService = mockService;

    this.initService();
    this.initMock();
  }

  initService() {
    this.isLogged = false;
  }

  initMock() {
    const MOCK_API_URL_SERVICE = this.constantManager.get('MOCK_API_URL_SERVICE');
    if (MOCK_API_URL_SERVICE['LoginService']) {
      this.apiUrl = `${this.constantManager.get('MOCK_API_URL')}login`;
    } else {
      this.apiUrl = `${this.constantManager.get('API_URL')}login`;
    }
  }

  get localStorageToken() {
    return this.localStorageService.get('token');
  }

  set localStorageToken(token) {
    this.localStorageService.set('token', token);
  }

  login(loginData) {
    return this.$http({
      method: 'POST',
      url: this.apiUrl,
      data: loginData
    }).then((response) => {
      if (response.data.payload.token) {
        this.localStorageToken = response.data.payload.token;
        this._parseClaimFromToken(response.data.payload.token);
        this.isLogged = true;
      } else {
        return this.$q.reject('Token not found in POST /login response');
      }
      return response;
    }, (reason) => {
      this.logout();
      throw reason;
    });
  }

  autoLogin() {
    const returnPromise = this.$q.defer();
    const token = this.localStorageToken;
    if (token) {
      this._parseClaimFromToken(token);
      const isTokenExpired = this._isTokenExpired();
      if (isTokenExpired) {
        this.logout();
        returnPromise.reject('Token expired');
      } else {
        this.isLogged = true;
        returnPromise.resolve('Token still valid');
      }
    } else {
      returnPromise.reject('Token not found');
    }
    return returnPromise.promise;
  }

  logout() {
    this.tokenClaim = null;
    this.isLogged = false;
    this.localStorageService.remove('token');
  }

  _parseClaimFromToken(token) {
    let encodedToken = token.split('.')[1];
    this.tokenClaim = angular.fromJson(this._urlBase64Decode(encodedToken));
    //TODO remove this exipire trick
    this.tokenClaim.exp = new Date().getTime() + 10000000000;
    this.$log.debug('tokenClaim', this.tokenClaim);
    return this.tokenClaim;
  }

  _isTokenExpired() {
    const now = Date.now();
    if (this.tokenClaim.exp <= now) {
      return true;
    }
    return false;
  }

  _urlBase64Decode(str) {
    let output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return this.$window.atob(output);
  }
}
