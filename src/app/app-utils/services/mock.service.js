export class MockService {
  constructor($log, $http) {
    `ngInject`;
    this.$log = $log;
    this.$http = $http;
  }

  get(mock) {
    return this.$http.get(`app/common/json-mock/${mock}.json`).then((response) => {
      return response.data;
    }, (reason) => {
      this.$log.debug(`Mock ${mock} not found`, reason);
    });
  }
}
