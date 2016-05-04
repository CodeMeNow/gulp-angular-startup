export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('main', {
    url: '/',
    abstract: true,
    views: {
      'layout': {
        templateUrl: 'app/main/layout.html',
        controller: 'MainController',
        controllerAs: 'main'
      },
      'header@main': {
        templateUrl: 'app/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'header'
      },
      'footer@main': {
        templateUrl: 'app/footer/footer.html',
        controller: 'FooterController',
        controllerAs: 'footer'
      }
    }
  })
  .state('main.login', {
    url: 'login',
    views: {
      'content': {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      }
    }
  })
  .state('main.home-page', {
    url: 'home-page',
    views: {
      'content': {
        templateUrl: 'app/home-page/home-page.html',
        controller: 'HomePageController',
        controllerAs: 'homePage'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');
}
