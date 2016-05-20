export class ModelTwoService {
  constructor(constantManager, $resource, mockService){
    'ngInject';
    this.constantManager = constantManager;
    this.$resource = $resource;
    this.mockService = mockService;

    this.resourceName = 'model-two';
    this.dataList = [];

    this.initService();
  }

  initService() {
    this.initMock();
    this.resource = this.$resource(
      `${this.apiUrl}/:id`, {id: '@id'},
      {
        query: {isArray: false},
        update: {method: 'PUT'}
      });
  }

  initMock() {
    const MOCK_API_URL_SERVICE = this.constantManager.get('MOCK_API_URL_SERVICE');
    if (MOCK_API_URL_SERVICE['ModelTwoService']) {
      this.apiUrl = `${this.constantManager.get('MOCK_API_URL')}/${this.resourceName}`;
    } else {
      this.apiUrl = `${this.constantManager.get('API_URL')}/${this.resourceName}`;
    }

    const PRELOAD_SERVICE = this.constantManager.get('PRELOAD_SERVICE');
    if (PRELOAD_SERVICE['ModelTwoService']) {
      this.mockService.get(this.resourceName).then((mockedModel) => {
        this.dataList = mockedModel;
      });
    }
  }
}
