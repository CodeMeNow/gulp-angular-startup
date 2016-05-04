export class ModelTwoService {
  constructor(constantManager, $resource, mockService, $httpBackend){
    'ngInject';
    this.constantManager = constantManager;
    this.$resource = $resource;
    this.mockService = mockService;
    this.$httpBackend = $httpBackend;

    this.resourceName = 'model-two';
    this.modelTwoList = [];

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
    if (MOCK_API_URL_SERVICE['ModelTwoService']) {
      this.apiUrl = `${this.constantManager.get('MOCK_API_URL')}/${this.resourceName}`;
    } else {
      this.apiUrl = `${this.constantManager.get('API_URL')}/${this.resourceName}`;
    }

    const MOCK_API_SERVICE = this.constantManager.get('MOCK_API_SERVICE');
    let regExp = new RegExp(`${this.apiUrl}`);
    if (MOCK_API_SERVICE['ModelTwoService']) {
      this.mockService.get('model-two').then((mockedModel) => {
        this.$httpBackend.whenGET(regExp).respond(mockedModel);
      });
    } else {
      this.$httpBackend.whenGET(regExp).passThrough();
    }

    const PRELOAD_SERVICE = this.constantManager.get('PRELOAD_SERVICE');
    if (PRELOAD_SERVICE['ModelTwoService']) {
      this.mockService.get('model-two').then((mockedModel) => {
        this.modelTwoList = mockedModel;
      });
    }
  }
}
