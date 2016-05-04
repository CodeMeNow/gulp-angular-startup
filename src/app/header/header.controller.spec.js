describe('HeaderController', () => {
  let headerController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    headerController = $controller('HeaderController');
  }));

  it('should exist', () => {
    expect(headerController).toBeDefined();
  });
});
