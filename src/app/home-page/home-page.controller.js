export class HomePageController {
  constructor(modelOneService, modelTwoService, $timeout){
    'ngInject';

    this.modelOneService = modelOneService;

    $timeout(() => {
      modelTwoService.resource.query((response) => {
        this.modelTwoList = response;
        console.log(this.modelTwoList);
      });
    }, 100);
  }
}
