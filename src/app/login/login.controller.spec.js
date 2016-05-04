describe('LoginController', () => {
  let loginController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    loginController = $controller('LoginController');
  }));

  it('should exist', () => {
    expect(loginController).toBeDefined();
  });
});
