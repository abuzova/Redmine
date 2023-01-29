// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { Constants } = require('../helper/constants.js');

test('Searching', async ({ page }) => {
  const header = new HeaderPage(page);
  const constants = new Constants();
  
  await header.goto();  

  await header.searchField.type(constants.SEARCH_WORD);
  await page.keyboard.press('Enter');
  const searchWordRegExp = new RegExp(constants.SEARCH_WORD);

  let zeroOrOneError = true;
  for (let i = 1; i < 21; i += 2) {
    const previousErrorsCount = test.info().errors.length; // 

    let searchResultTitle = page.locator('dl#search-results :nth-child('+ i +').wiki-page'); 
    let searchResultDescription = page.locator('dl#search-results :nth-child('+ (i + 1) +') span.description');   
    await expect.soft(searchResultTitle).toHaveText(searchWordRegExp, {ignoreCase:true} );
    await expect.soft(searchResultDescription).toHaveText(searchWordRegExp, {ignoreCase:true} );
    
    // 
    const newErrorsCount = test.info().errors.length - previousErrorsCount; // 0, 1, 2    

    if (newErrorsCount > 1) {
      zeroOrOneError = false;
    }
  }
  test.fail(zeroOrOneError, 'Failing because more than one error');  
});
