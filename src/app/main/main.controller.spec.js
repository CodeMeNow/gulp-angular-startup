describe('MainController', () => {
  let mainController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    mainController = $controller('MainController');
  }));

  it('should exist', () => {
    expect(mainController).toBeDefined();
  });
});
