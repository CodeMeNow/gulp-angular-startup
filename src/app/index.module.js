/* global moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';

//Controllers
import {MainController} from './main/main.controller';
import {HomePageController} from './home-page/home-page.controller';
import {HeaderController} from './header/header.controller';
import {FooterController} from './footer/footer.controller';
import {LoginController} from './login/login.controller';

//Services
  //Models
import {ModelOneService} from './common/models/model-one.service';
import {ModelTwoService} from './common/models/model-two.service';

//Internal modules imports
/*eslint-disable */
import {appUtilsModule} from './app-utils/app-utils.module';
/*eslint-enable */

angular.module('app', [
  'env.constants',
  'app.utils',
  //Angular modules
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ui.bootstrap'])

  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)

  //Controllers
  .controller('MainController', MainController)
  .controller('HomePageController', HomePageController)
  .controller('HeaderController', HeaderController)
  .controller('FooterController', FooterController)
  .controller('LoginController', LoginController)

  //Services
    //Models
  .service('modelOneService', ModelOneService)
  .service('modelTwoService', ModelTwoService)

  ;
