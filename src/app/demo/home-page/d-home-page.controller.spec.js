describe('DHomePageController', () => {
  let homePageController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    homePageController = $controller('DHomePageController');
  }));

  it('should exist', () => {
    expect(homePageController).toBeDefined();
  });
});
