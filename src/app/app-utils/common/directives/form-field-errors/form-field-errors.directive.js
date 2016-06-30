export function FormFieldErrorsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    require: '^form',
    scope: {
      fieldName: '@'
    },
    transclude: true,
    templateUrl: 'app/app-utils/common/directives/form-field-errors/form-field-errors.html',
    link: linkFunc,
    controller: FormFieldErrorsController,
    controllerAs: 'formFieldErrors',
    bindToController: true
  };

  return directive;

  function linkFunc(scope, el, attr, form) {
    scope.formFieldErrors.form = form;
    scope.formFieldErrors.formField = form[scope.formFieldErrors.fieldName];
    scope.$on('$destroy', () => {
    });
  }
}

class FormFieldErrorsController {
  constructor($log) {
    'ngInject';
    this.$log = $log;
  }
}
