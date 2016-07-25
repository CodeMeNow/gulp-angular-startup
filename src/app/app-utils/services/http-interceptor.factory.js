export function HttpInterceptor($log, $injector) {
  'ngInject';

  let interceptor = {
    responseError: handleError,
    response: handleResponse,
    request: handleRequest
  };

  function handleRequest(request){
    //NOTE if JWT is used uncomment this lines
    // if (~request.url.indexOf(constantManager.get('API_URL'))) {
    //   //TODO check for expired token
    //   const token = localStorageService.get('token');
    //   if (token) {
    //     request.headers.Authorization = `Bearer ${token}`;
    //   }
    //   let filteredParams = {};
    //   for (let param in request.params) {
    //     if (angular.isDefined(request.params[param]) && request.params[param] !== '' &&
    //          request.params[param] !== ' ') {
    //       filteredParams[param] = request.params[param];
    //     }
    //   }
    //   request.params = filteredParams;
    // }
    return request;
  }

  function handleResponse(response) {
    let config = response.config;
    if (config.url.indexOf('api') > 0) {
      if (response.data && response.data.metadata && response.data.metadata.uiMessages) {
        //NOTE handle in app specific way
        _logInfosOrErrors(response);
      }
    }
    return response;
  }

  function handleError(response) {
    //NOTE handle in app specific way
    _logInfosOrErrors(response, true);
    return response;
  }

  function _logInfosOrErrors(response, isError) {
    //TODO: avoid open multiple modals, ex push toast messages and add target to
    //message payload
    let modalManagerService = $injector.get('modalManagerService');
    let toastr = $injector.get('toastr');

    let uiMessages = response.data && response.data.metadata && response.data.metadata.uiMessages;

    if (uiMessages) {
      uiMessages.forEach((message) => {
        console.log('message', message);
        if (message.target === 'modal') {
          let modalPayload = message;
          modalPayload.cancelBtnText = 'Close';
          modalManagerService.open(modalPayload);
        } else if (message.target === 'toast') {
          switch (message.type) {
            case 'success':
              toastr.success(message.title, message.message);
              break;
            case 'info':
              toastr.info(message.title, message.message);
              break;
            case 'error':
              toastr.error(message.title, message.message);
              break;
            default:
              toastr.info(message.title, message.message);
          }
        }
      });
      return interceptor;
    }

    if (response.data) {
      //Straight server error
      let modalPayload = {
        message: response.data,
        title: 'Server error',
        type: 'error',
        cancelBtnText: 'Close'
      };
      modalManagerService.open(modalPayload);
      return interceptor;
    }

    if (isError) {
      //Other errors
      let modalPayload = {
        message: 'Damn! Server error',
        title: 'Server error',
        type: 'error',
        cancelBtnText: 'Close'
      };
      modalManagerService.open(modalPayload);
    }
  }

  return interceptor;
}
