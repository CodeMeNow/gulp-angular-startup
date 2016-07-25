export function demoRouterConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('demo', {
    url: '/demo',
    abstract: true,
    views: {
      'layout': {
        templateUrl: 'app/demo/main/d-layout.html',
        controller: 'DMainController',
        controllerAs: 'dMain'
      },
      'header@demo': {
        templateUrl: 'app/demo/header/d-header.html',
        controller: 'DHeaderController',
        controllerAs: 'dHeader'
      },
      'footer@demo': {
        templateUrl: 'app/demo/footer/d-footer.html',
        controller: 'DFooterController',
        controllerAs: 'dFooter'
      }
    }
  })

  .state('demo.login', {
    url: '/login',
    views: {
      'content': {
        templateUrl: 'app/demo/login/d-login.html',
        controller: 'DLoginController',
        controllerAs: 'dLogin'
      }
    }
  })

  .state('demo.home-page', {
    url: '/home-page',
    views: {
      'content': {
        templateUrl: 'app/demo/home-page/d-home-page.html',
        controller: 'DHomePageController',
        controllerAs: 'dHomePage'
      }
    }
  })
  ;
}
