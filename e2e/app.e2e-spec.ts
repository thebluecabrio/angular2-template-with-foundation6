import { Angular2TemplatePage } from './app.po';

describe('angular2-template App', function() {
  let page: Angular2TemplatePage;

  beforeEach(() => {
    page = new Angular2TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
