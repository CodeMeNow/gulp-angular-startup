export function config($logProvider, $locationProvider, $httpProvider, constantManagerProvider) {
  'ngInject';
  $logProvider.debugEnabled(constantManagerProvider.getConstant('ENV') !== 'production');
  $locationProvider.html5Mode(constantManagerProvider.getConstant('HTML5_MODE'));
  $httpProvider.useApplyAsync(constantManagerProvider.getConstant('USE_APPLYASYNC'));
  // $httpProvider.interceptors.push('httpInterceptor');
}
