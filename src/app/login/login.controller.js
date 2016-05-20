export class LoginController {
  constructor($log, loginService) {
    'ngInject';
    this.$log = $log;
    this.loginService = loginService;

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

  _initController() {
    this.loginService.autoLogin().then((response) => {
      this.$log.debug(response, ' ask for user details...');
    }, (reason) => {
      this.$log.debug('Autologin error', reason);
    });
  }
}
