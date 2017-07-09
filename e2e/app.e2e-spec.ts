import { DialogServicePage } from './app.po';

describe('dialog-service App', () => {
  let page: DialogServicePage;

  beforeEach(() => {
    page = new DialogServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
