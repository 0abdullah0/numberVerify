import { AbdullahPage } from './app.po';

describe('abdullah App', function() {
  let page: AbdullahPage;

  beforeEach(() => {
    page = new AbdullahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
