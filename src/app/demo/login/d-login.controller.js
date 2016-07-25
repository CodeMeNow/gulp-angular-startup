export class DLoginController {
  constructor($log, loginService, $http, constantManager) {
    'ngInject';
    this.$log = $log;
    this.$http = $http;
    this.loginService = loginService;
    this.constantManager = constantManager;

    this._initController();
  }

  login() {
    this.$log.log('loginData', this.loginData, this.loginService.token);
    this.loginService.login(this.loginData).then(() => {
      this.$log.log('Login success');
    }, (reason) => {
      this.$log.log('Login error', reason);
    });
  }

  test404() {
    return this.$http({
      method: 'GET',
      url: `${this.constantManager.get('MOCK_API_URL')}test-404`
    }).then((response) => {
      this.$log.log(response);
    }, (reason) => {
      this.$log.log(reason);
    });
  }

  test201WithInfo() {
    return this.$http({
      method: 'GET',
      url: `${this.constantManager.get('MOCK_API_URL')}test-201-with-info`
    }).then((response) => {
      this.$log.log(response);
    }, (reason) => {
      this.$log.log(reason);
    });
  }

  test500() {
    return this.$http({
      method: 'GET',
      url: `${this.constantManager.get('MOCK_API_URL')}fake-endpoint`
    }).then((response) => {
      this.$log.log(response);
    }, (reason) => {
      this.$log.log(reason);
    });
  }

  testGenericError() {
    return this.$http({
      method: 'GET',
      url: `http://asd.asd.org/not-exixt`
    }).then((response) => {
      this.$log.log(response);
    }, (reason) => {
      this.$log.log(reason);
    });
  }

  _initController() {
    this.loginService.autoLogin().then((response) => {
      this.$log.debug(response, ' ask for user details...');
    }, (reason) => {
      this.$log.debug('Autologin error', reason);
    });
  }
}
