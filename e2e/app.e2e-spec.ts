import { HarryPotterPage } from './app.po';

describe('harry-potter App', function() {
  let page: HarryPotterPage;

  beforeEach(() => {
    page = new HarryPotterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
