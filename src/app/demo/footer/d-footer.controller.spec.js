describe('DFooterController', () => {
  let dFooterController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    dFooterController = $controller('DFooterController');
  }));

  it('should exist', () => {
    expect(dFooterController).toBeDefined();
  });
});
