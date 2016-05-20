export class ModelOneService {
  constructor(constantManager, $resource, mockService){
    'ngInject';
    this.constantManager = constantManager;
    this.$resource = $resource;
    this.mockService = mockService;

    this.resourceName = 'model-one';
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
    if (MOCK_API_URL_SERVICE['ModelOneService']) {
      this.apiUrl = `${this.constantManager.get('MOCK_API_URL')}/${this.resourceName}`;
    } else {
      this.apiUrl = `${this.constantManager.get('API_URL')}/${this.resourceName}`;
    }

    const PRELOAD_SERVICE = this.constantManager.get('PRELOAD_SERVICE');
    if (PRELOAD_SERVICE['ModelOneService']) {
      this.mockService.get(this.resourceName).then((mockedModel) => {
        this.dataList = mockedModel;
      });
    }
  }
}
