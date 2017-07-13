import { NgtrisPage } from './app.po';

describe('ngtris App', () => {
  let page: NgtrisPage;

  beforeEach(() => {
    page = new NgtrisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
