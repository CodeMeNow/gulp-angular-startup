//Routes
import {demoRouterConfig} from './demo.route';

//Controllers
import {DMainController} from './main/d-main.controller';
import {DHeaderController} from './header/d-header.controller';
import {DFooterController} from './footer/d-footer.controller';

import {DHomePageController} from './home-page/d-home-page.controller';
import {DLoginController} from './login/d-login.controller';

//Services;

//Directives

export const appDemoModule = (function appDemoModule() {
  angular.module('app.demo', ['ui.router'])

  .config(demoRouterConfig)

    //Controllers
    .controller('DMainController', DMainController)
    .controller('DHeaderController', DHeaderController)
    .controller('DFooterController', DFooterController)

    .controller('DHomePageController', DHomePageController)
    .controller('DLoginController', DLoginController)

    //Services


    //Directives
    ;
}());
