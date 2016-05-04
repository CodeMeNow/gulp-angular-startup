describe('FooterController', () => {
  let footerController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    footerController = $controller('FooterController');
  }));

  it('should exist', () => {
    expect(footerController).toBeDefined();
  });
});
