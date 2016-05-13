export class MockService {
  constructor($log, $http) {
    `ngInject`;
    this.$log = $log;
    this.$http = $http;
  }

  get(mock, module = '') {
    module = (module) ? `${module}/` : '';
    return this.$http.get(`app/${module}common/json-mock/${mock}.json`).then((response) => {
      return response.data;
    }, (reason) => {
      this.$log.debug(`Mock ${mock} not found in module: ${module}`, reason);
    });
  }
}
