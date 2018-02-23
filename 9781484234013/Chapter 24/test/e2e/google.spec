describe('google homepage', () => {
  beforeEach(() => {
    browser.get('http://www.google.com');
  });

  it('should load page', () => {
      element(by.name('q')).sendKeys('Aurelia');
      element(by.name('btnG')).click();

      browser.sleep(2000);
      expect(element(by.css('h3 a')).getText()).toContain('Aurelia');
  });
});