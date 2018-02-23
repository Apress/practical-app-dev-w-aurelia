describe('aurelia homepage', () => {
  it('should load page', () => {
    browser.get('http://www.aurelia.io');
    expect(browser.getTitle()).toEqual('Home | Aurelia');
  });
});
