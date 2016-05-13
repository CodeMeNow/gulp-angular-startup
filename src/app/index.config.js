export function config($logProvider, $locationProvider, $httpProvider, constantManagerProvider,
    $translatePartialLoaderProvider, $translateProvider) {
  'ngInject';
  $logProvider.debugEnabled(constantManagerProvider.getConstant('ENV') !== 'production');
  $locationProvider.html5Mode(constantManagerProvider.getConstant('HTML5_MODE'));
  $httpProvider.useApplyAsync(constantManagerProvider.getConstant('USE_APPLYASYNC'));
  // $httpProvider.interceptors.push('httpInterceptor');

  $translatePartialLoaderProvider.addPart('app');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/app/i18n/{part}/{part}-{lang}.json'
  });
  $translateProvider.preferredLanguage('it');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}
