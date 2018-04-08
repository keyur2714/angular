import { ExpressDemoPage } from './app.po';

describe('express-demo App', () => {
  let page: ExpressDemoPage;

  beforeEach(() => {
    page = new ExpressDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
