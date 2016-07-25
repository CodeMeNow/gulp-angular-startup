describe('DLoginController', () => {
  let dLoginController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    dLoginController = $controller('DLoginController');
  }));

  it('should exist', () => {
    expect(dLoginController).toBeDefined();
  });
});
