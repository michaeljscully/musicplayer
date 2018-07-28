import { ShoesUiTestPage } from './app.po';

describe('shoes-ui-test App', function() {
  let page: ShoesUiTestPage;

  beforeEach(() => {
    page = new ShoesUiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
