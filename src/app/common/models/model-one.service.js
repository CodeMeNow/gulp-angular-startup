export class ModelOneService {
  constructor(constantManager, $resource, mockService, $httpBackend){
    'ngInject';
    this.constantManager = constantManager;
    this.$resource = $resource;
    this.mockService = mockService;
    this.$httpBackend = $httpBackend;

    this.resourceName = 'model-one';
    this.modelOneList = [];

    this._initApi();
  }

  _initApi() {
    this._initMock();
    this.resource = this.$resource(
      `${this.apiUrl}/:id`, {id: '@id'},
      {
        query: {isArray: false},
        update: {method: 'PUT'}
      });
  }

  _initMock() {
    const MOCK_API_URL_SERVICE = this.constantManager.get('MOCK_API_URL_SERVICE');
    if (MOCK_API_URL_SERVICE['ModelOneService']) {
      this.apiUrl = `${this.constantManager.get('MOCK_API_URL')}/${this.resourceName}`;
    } else {
      this.apiUrl = `${this.constantManager.get('API_URL')}/${this.resourceName}`;
    }

    const MOCK_API_SERVICE = this.constantManager.get('MOCK_API_SERVICE');
    let regExp = new RegExp(`${this.apiUrl}`);
    if (MOCK_API_SERVICE['ModelOneService']) {
      this.mockService.get('model-one').then((mockedModel) => {
        this.$httpBackend.whenGET(regExp).respond(mockedModel);
      });
    } else {
      this.$httpBackend.whenGET(regExp).passThrough();
    }

    const PRELOAD_SERVICE = this.constantManager.get('PRELOAD_SERVICE');
    if (PRELOAD_SERVICE['ModelOneService']) {
      this.mockService.get('model-one').then((mockedModel) => {
        this.modelOneList = mockedModel;
      });
    }
  }
}
