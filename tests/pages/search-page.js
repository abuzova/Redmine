const { expect } = require('@playwright/test');
exports.SearchPage = class SearchPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    //this.searchResultTitle = page.locator('dl#search-results dt:nth-child(1) a '); // need loop
    //this.searchResultDescription = page.locator('dl#search-results dd:nth-child(2) .description '); // need loop
  }  

  async haveTextSearchResultTitle() { 
    return await expect(this.searchResultTitle).toHaveText(SEARCH_WORD); 
  }

  async haveTextSearchResultDescription() {
    return await expect(this.searchResultDescription).toHaveText(SEARCH_WORD);    
  }
}

