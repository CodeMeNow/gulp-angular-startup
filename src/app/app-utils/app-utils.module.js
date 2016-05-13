import {appConstants} from '../common/constants/app-constants';
//Controllers
import {DefaultModalController} from './common/modals/default-modal.controller.js';
//Services
import {MockService} from './services/mock.service.js';
import {ModalManagerService} from './services/modal-manager.service.js';
import {ConstantManager} from './services/constant-manager.provider.js';

export const appUtilsModule = (function appUtilsModule() {
  angular.module('app.utils', [
    'ui.bootstrap'])
    .constant('APP_CONSTANTS', appConstants())
    //Controllers
    .controller('DefaultModalController', DefaultModalController)
    //Services
    .service('mockService', MockService)
    .service('modalManagerService', ModalManagerService)
    .provider('constantManager', ConstantManager)
    ;
}());
