import { NgIfThenElseDemoPage } from './app.po';

describe('ng-if-then-else-demo App', () => {
  let page: NgIfThenElseDemoPage;

  beforeEach(() => {
    page = new NgIfThenElseDemoPage();
  });

  it('should display welcome p1 message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('APP');
  });

  it('should display welcome h1 message', () => {
    page.navigateTo();
    expect(page.getH1Text()).toEqual('app');
  });
});
