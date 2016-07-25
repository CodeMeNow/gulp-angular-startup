describe('DHeaderController', () => {
  let dHeaderController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    dHeaderController = $controller('DHeaderController');
  }));

  it('should exist', () => {
    expect(dHeaderController).toBeDefined();
  });
});
