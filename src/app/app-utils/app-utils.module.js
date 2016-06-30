import {appConstants} from '../common/constants/app-constants';
//Controllers
import {DefaultModalController} from './common/modals/default-modal.controller.js';
//Services
import {LoginService} from './services/login-service.js';
import {ModalManagerService} from './services/modal-manager.service.js';
import {MockService} from './services/mock.service.js';
import {HttpInterceptor} from './services/http-interceptor.factory.js';
import {ConstantManager} from './services/constant-manager.provider.js';

//Directives
import {FormFieldErrorsDirective} from './common/directives/form-field-errors/form-field-errors.directive.js';

export const appUtilsModule = (function appUtilsModule() {
  angular.module('app.utils', [
    'ui.bootstrap'])
    .constant('APP_CONSTANTS', appConstants())
    //Controllers
    .controller('DefaultModalController', DefaultModalController)
    //Services
    .service('loginService', LoginService)
    .service('modalManagerService', ModalManagerService)
    .service('mockService', MockService)
    .factory('httpInterceptor', HttpInterceptor)
    .provider('constantManager', ConstantManager)

    //Directives
    .directive('formFieldErrors', FormFieldErrorsDirective)
    ;
}());
