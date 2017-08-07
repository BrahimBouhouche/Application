import { JCMApplicationPage } from './app.po';

describe('jcmapplication App', () => {
  let page: JCMApplicationPage;

  beforeEach(() => {
    page = new JCMApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
