import { FormgroupPage } from './app.po';

describe('formgroup App', function() {
  let page: FormgroupPage;

  beforeEach(() => {
    page = new FormgroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
