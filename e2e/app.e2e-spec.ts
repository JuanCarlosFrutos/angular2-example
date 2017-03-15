import { NuevoTwitterPage } from './app.po';

describe('nuevo-twitter App', function() {
  let page: NuevoTwitterPage;

  beforeEach(() => {
    page = new NuevoTwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
