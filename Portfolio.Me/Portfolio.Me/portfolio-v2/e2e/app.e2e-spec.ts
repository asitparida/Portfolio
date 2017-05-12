import { PortfolioV2Page } from './app.po';

describe('portfolio-v2 App', () => {
  let page: PortfolioV2Page;

  beforeEach(() => {
    page = new PortfolioV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
