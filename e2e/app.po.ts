import { browser, element, by } from 'protractor';

export class ConnectFourPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('.header-text')).getText();
  }
}
