import { CPage } from './app.po';

describe('c App', () => {
  let page: CPage;

  beforeEach(() => {
    page = new CPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
