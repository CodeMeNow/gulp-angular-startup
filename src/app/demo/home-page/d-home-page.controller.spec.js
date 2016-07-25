describe('DHomePageController', () => {
  let homePageController;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($controller) => {
    homePageController = $controller('HomePageController');
  }));

  it('should exist', () => {
    expect(homePageController).toBeDefined();
  });
});
