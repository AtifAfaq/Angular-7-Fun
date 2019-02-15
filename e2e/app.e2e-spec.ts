import { AtifFunPage } from './app.po';

describe('atif-fun App', function() {
  let page: AtifFunPage;

  beforeEach(() => {
    page = new AtifFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
