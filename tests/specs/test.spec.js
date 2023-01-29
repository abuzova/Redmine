// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { SearchPage } = require('../pages/search-page.js');

//const { Constants } = require('../helper/constants.js');

test.skip('Main menu', async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goto();

  await header.isOverviewPage();
  await header.isDownloadPage();
  await header.isActivityPage();
  await header.isRoadmapPage();
  await header.isIssuesPage();
  await header.isNewsPage();
  await header.isWikiPage();
  await header.isForumsPage();
  await header.isRepositoryPage();
});

test.skip('Top menu', async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goto();

  await header.isProjectsPage();
  await header.isHelpPage();
  await header.isHomePage();
});

test('Searching', async ({ page }) => {
  const header = new HeaderPage(page);
  const search = new SearchPage(page);
  //const constants = new Constants();
  
  await header.goto();  

  //await header.searchField.type(constants.SEARCH_WORD); // need to create file with constants 
  //await page.keyboard.press('Enter');
  //await search.haveTextSearchResultTitle();
  //await search.haveTextSearchResultDescription();
  //await expect(search.searchResultDescription).toHaveText(/activity/);
  
  //console.log(constants.SEARCH_WORD);

  // 1) Results (70) should be equal checked pages
  // 2) Each result should have title and/or description with searchin word or phrase

  await header.searchField.type('activity');
  await page.keyboard.press('Enter');
  const re = new RegExp('activity');

  let zeroOrOneError = true;
  for (let i = 1; i < 21; i += 2) {
    const previousErrorsCount = test.info().errors.length;

    let searchResultTitle = page.locator('dl#search-results :nth-child('+ i +').wiki-page'); 
    let searchResultDescription = page.locator('dl#search-results :nth-child('+ (i + 1) +') span.description');   
    await expect.soft(searchResultTitle).toHaveText(re, {ignoreCase:true} );
    await expect.soft(searchResultDescription).toHaveText(re, {ignoreCase:true} );
    console.log("running i = ", i);
    console.log("running i = ", (i + 1));        

    console.log("test errors ", test.info().errors.length);  
    const newErrorsCount = test.info().errors.length - previousErrorsCount; // 0, 1, 2

    console.log("new errors!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ", newErrorsCount);  

    if (newErrorsCount > 1) {
      zeroOrOneError = false;
    }
    //expect(newErrorsCount).toBeLessThanOrEqual(1); 
  }
  test.fail(zeroOrOneError, 'oh no, failing because more than one error');
  //expect(zeroOrOneError).toBeTruthy(); 

  //await expect.soft(page.getByTestId('status')).toHaveText('Success');  
});



