/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';

//Controllers
import {MainController} from './main/main.controller';

//Services
  //Models
import {ModelOneService} from './common/models/model-one.service';
import {ModelTwoService} from './common/models/model-two.service';

//Internal modules imports
/*eslint-disable */
import {appUtilsModule} from './app-utils/app-utils.module';
import {appDemoModule} from './demo/demo.module';
/*eslint-enable */

angular.module('app', [
  'env.constants',
  'app.utils',
  'app.demo',
  //Angular modules
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  //Vendor modues
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'LocalStorageModule',
  'toastr'])

  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  //Controllers
  .controller('MainController', MainController)


  //Services
    //Models
  .service('modelOneService', ModelOneService)
  .service('modelTwoService', ModelTwoService)

  ;
