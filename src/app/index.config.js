export function config($logProvider, $locationProvider, $httpProvider, $compileProvider, constantManagerProvider,
    $translatePartialLoaderProvider, $translateProvider, localStorageServiceProvider) {
  'ngInject';
  $logProvider.debugEnabled(constantManagerProvider.getConstant('ENV') !== 'production');
  $compileProvider.debugInfoEnabled(constantManagerProvider.getConstant('ENV') !== 'production');
  $locationProvider.html5Mode(constantManagerProvider.getConstant('HTML5_MODE'));
  $httpProvider.useApplyAsync(constantManagerProvider.getConstant('USE_APPLYASYNC'));
  // $httpProvider.interceptors.push('httpInterceptor');

  //Local storage configs
  localStorageServiceProvider.setPrefix(constantManagerProvider.getConstant('APP_NAME'));

  //i18n Configs
  $translatePartialLoaderProvider.addPart('app');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/app/i18n/{part}/{part}-{lang}.json'
  });
  $translateProvider.preferredLanguage('it');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}
