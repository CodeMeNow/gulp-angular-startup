describe('DMainController', () => {
  let dMainController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    dMainController = $controller('DMainController');
  }));

  it('should exist', () => {
    expect(dMainController).toBeDefined();
  });
});
