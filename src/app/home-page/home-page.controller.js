export class HomePageController {
  constructor(modelOneService, modelTwoService){
    'ngInject';

    this.modelOneService = modelOneService;
    this.modelTwoService = modelTwoService;

    modelTwoService.resource.query((response) => {
      this.modelTwoList = response;
      console.log(this.modelTwoList);
    });
  }
}
