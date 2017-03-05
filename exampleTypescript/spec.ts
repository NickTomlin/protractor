import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('App', () => {
  let appPage;

  it('should find `menu` component', () => {
    browser.get('http://angularjs.org');
    browser.explore();

    expect($('input').isPresent()).toEqual(true);
  });
});
