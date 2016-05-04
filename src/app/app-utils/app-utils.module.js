import {appConstants} from '../common/constants/app-constants';
//Controllers
//Services
import {MockService} from './services/mock.service.js';
import {ConstantManager} from './services/constant-manager.provider.js';

export const appUtilsModule = (function appUtilsModule() {
  angular.module('app.utils', [])
    .constant('APP_CONSTANTS', appConstants())
    //Controllers
    //Services
    .service('mockService', MockService)
    .provider('constantManager', ConstantManager)
    ;
}());
