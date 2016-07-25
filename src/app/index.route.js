export function routerConfig($urlRouterProvider) {
  'ngInject';

  // $stateProvider
  // .state('main', {
  //   url: '/',
  //   abstract: false,
  //   views: {
  //     'layout': {
  //       template: 'main state',
  //       controller: 'MainController',
  //       controllerAs: 'main'
  //     }
  //   }
  // });
  //
  $urlRouterProvider.otherwise('/demo/login');
}
