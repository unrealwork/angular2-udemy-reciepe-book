import { ReciepeBookPage } from './app.po';

describe('reciepe-book App', () => {
  let page: ReciepeBookPage;

  beforeEach(() => {
    page = new ReciepeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
