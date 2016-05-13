'use strict';

describe('The home page', function describe() {
  // var page;

  beforeEach(function beforeEach() {
    browser.get('/home-page');
    // page = require('./home-page.po');
  });

  it('should have a title', function it() {
    expect(browser.getTitle()).toEqual('App');
    // expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    // expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    // expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  // it('should list more than 5 awesome things', function () {
  //   expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  // });

});
