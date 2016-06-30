xdescribe('FormFieldErrorsDirective', function test() {
  let element, directiveController;
  let mockFormController = {
    inputOne: {
      mixedData: {}
    }
  };

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($compile, $rootScope) => {
    let scope = $rootScope.$new();

    element = angular.element(`
      <form-field-errors field-name="inputOne"></form-field-errors>
    `);
    element.data('$formController', mockFormController);

    $compile(element)(scope);
    $rootScope.$digest();
    directiveController = element.controller('formFieldErrors');
    // isolateScope = element.isolateScope().wizardSidebar;

  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should assign formField', () => {
    expect(directiveController.formField).toEqual(mockFormController.inputOne);
  });
});
