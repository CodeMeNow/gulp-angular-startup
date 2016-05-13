export class ModalManagerService {
  constructor($uibModal) {
    'ngInject';
    this.$uibModal = $uibModal;
  }

  open(modalConfig) {
    const config = {
      templateUrl: modalConfig.templateUrl || 'app/app-utils/common/modals/default-modal.html',
      controller: modalConfig.controller || 'DefaultModalController',
      controllerAs: 'modal',
      size: modalConfig.size || 'md',
      windowClass: modalConfig.windowClass || '',
      resolve: {
        config: function resolve() {
          return modalConfig;
        }
      }
    };
    var modalInstance = this.$uibModal.open(config);

    return modalInstance;
  }
}
