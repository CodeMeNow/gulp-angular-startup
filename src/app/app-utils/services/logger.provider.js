export class LoggerService {
  constructor(ENABLE_LOG_STORE_SERVICE) {
    'ngInject';
    this.ENABLE_LOG_STORE_SERVICE = ENABLE_LOG_STORE_SERVICE;
  }

  _log(type = 'INFO', logPayload) {
    if (this.ENABLE_LOG_STORE_SERVICE) {
      this.loggerResource.save({
        level: type.toUpperCase(),
        message: angular.toJson(logPayload)
      });
    }
  }

  log(logPayload) {
    this._log('LOG', logPayload);
  }
  info(logPayload) {
    this._log('INFO', logPayload);
  }
  debug(logPayload) {
    this._log('CONFIG', logPayload);
  }
  error(logPayload) {
    this._log('SEVERE', logPayload);
  }
  warn(logPayload) {
    this._log('WARNING', logPayload);
  }

  parsePayload(logPayload) {
    return logPayload;
  }

  $get($resource, constantManager) {
    'ngInject';
    this.resourceName = 'logger';
    this.serviceName = 'LoggerService';

    const MOCK_API_URL_SERVICE = constantManager.get('MOCK_API_URL_SERVICE');
    if (MOCK_API_URL_SERVICE[this.serviceName]) {
      this.apiUrl = `${constantManager.get('MOCK_API_URL')}${this.resourceName}`;
    } else {
      this.apiUrl = `${constantManager.get('API_URL')}${this.resourceName}`;
    }

    this.loggerResource = $resource(`${this.apiUrl}/log`);
    return {
      log: this.log,
      info: this.info,
      debug: this.debug,
      error: this.error,
      warn: this.warn
    };
  }
}
