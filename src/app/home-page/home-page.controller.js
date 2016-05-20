export class HomePageController {
  constructor($log, modelOneService, modelTwoService, $translate, $translatePartialLoader, modalManagerService) {
    'ngInject';
    this.$log = $log;
    this.$translate = $translate;
    this.modalManagerService = modalManagerService;
    this.modelOneService = modelOneService;
    this.modelTwoService = modelTwoService;

    modelTwoService.resource.query((response) => {
      this.modelTwoList = response.payload;
      console.log(this.modelTwoList);
    });

    $translatePartialLoader.addPart('home-page');
  }

  changeLanguage(lang) {
    this.$translate.use(lang);
  }

  openModal() {
    let modalPayload = {
      type: 'info',
      title: 'Modal Title',
      windowClass: 'info',
      message: 'This is modal message',
      details: [
        {
          type: 'danger',
          description: 'First detail'
        },
        {
          type: 'success',
          description: 'Second detail'
        }
      ],
      dismissableBtnTitle: 'Cancel',
      closeBtnTitle: 'Got it!'
    };
    this.modalManagerService.open(modalPayload).result.then(() => {
      this.$log.log('Modal closed');
    }, () => {
      this.$log.log('Modal dismissed');
    });
  }
}
