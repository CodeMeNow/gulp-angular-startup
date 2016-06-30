export function appUtilsConfig($provide, ENABLED_LOG_METHODS, loggerServiceProvider) {
  'ngInject';
  //$log decoration
  $provide.decorator('$log', ($delegate) => {
    //Info
    var infoFn = $delegate.info;
    $delegate.info = function logInfo() {
      if (ENABLED_LOG_METHODS.info) {
        infoFn.apply(null, arguments);
      }
    };

    //Log
    var logFn = $delegate.log;
    $delegate.log = function logLog() {
      if (ENABLED_LOG_METHODS.log) {
        logFn.apply(null, arguments);
      }
    };

    //Debug
    var debugFn = $delegate.debug;
    $delegate.debug = function logDebug() {
      if (ENABLED_LOG_METHODS.debug) {
        debugFn.apply(null, arguments);
      }
    };

    //Debug
    var warnFn = $delegate.warn;
    $delegate.warn = function logWarn() {
      let logPayload = [].slice.call(arguments);
      loggerServiceProvider.warn(logPayload);
      if (ENABLED_LOG_METHODS.warn) {
        warnFn.apply(null, arguments);
      }
    };

    //Error
    var errorFn = $delegate.error;
    $delegate.error = function logError() {
      let logPayload = [].slice.call(arguments);
      loggerServiceProvider.error(logPayload);
      if (ENABLED_LOG_METHODS.error) {
        errorFn.apply(null, arguments);
      }
    };
    return $delegate;
  });

  //$exceptionHandler decoration
  $provide.decorator('$exceptionHandler', ($delegate) => {
    return (exception, cause) => {
      //By default Angular $exceptionHandler calls $log.error
      //Wich in turn calls loggerProvider
      $delegate(exception, cause);
    };
  });
}
