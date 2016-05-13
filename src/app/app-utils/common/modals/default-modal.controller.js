export class DefaultModalController {

  constructor($log, $uibModalInstance, config) {
    'ngInject';

    this.$log = $log;
    this.$uibModalInstance = $uibModalInstance;
    this.config = config;
  }

  close() {
    this.$uibModalInstance.close();
  }

  dismiss() {
    this.$uibModalInstance.dismiss();
  }

}
