import { browser, by, element } from 'protractor';

export class NgIfThenElseDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Text() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
