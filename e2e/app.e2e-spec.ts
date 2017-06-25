import { YashgajeraPage } from './app.po';

describe('yashgajera App', () => {
  let page: YashgajeraPage;

  beforeEach(() => {
    page = new YashgajeraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
