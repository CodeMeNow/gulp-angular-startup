export function config($locationProvider, $httpProvider, $compileProvider, constantManagerProvider,
    $translatePartialLoaderProvider, $translateProvider, localStorageServiceProvider, toastrConfig) {
  'ngInject';
  $compileProvider.debugInfoEnabled(constantManagerProvider.getConstant('ENV') !== 'production');
  $locationProvider.html5Mode(constantManagerProvider.getConstant('HTML5_MODE'));
  $httpProvider.useApplyAsync(constantManagerProvider.getConstant('USE_APPLYASYNC'));

  //Interceptor
  $httpProvider.interceptors.push('httpInterceptor');

  //Local storage configs
  localStorageServiceProvider.setPrefix(constantManagerProvider.getConstant('APP_NAME'));

  //i18n Configs
  $translatePartialLoaderProvider.addPart('app');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/app/i18n/{part}/{part}-{lang}.json'
  });
  $translateProvider.preferredLanguage('it');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

  //Toastr
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 3,
    newestOnTop: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    preventOpenDuplicates: true,
    target: 'body',
    timeOut: 3000,
    extendedTimeOut: 3000
  });
}
