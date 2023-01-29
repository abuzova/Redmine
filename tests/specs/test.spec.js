// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { RegisterPage } = require('../pages/register-page.js');
const { LoginPage } = require('../pages/login-page.js');
const { RandomStringGeneration } = require('../helper/generetion.js');
const { Constants } = require('../helper/constants.js');


test('Main menu', async ({ page }) => {
  const header = new HeaderPage(page);
  await header. goto();

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

test('Top menu', async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goto();
  await header.isProjectsPage();
  await header.isHelpPage();
  await header.isHomePage();
});

test('Verify registering with valid credentials', async ({ page }) => {
  const headerPage  = new HeaderPage(page);
  await headerPage.goto();
  const registerPage  = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const generetionString = new RandomStringGeneration();
  let login = await generetionString.gen_login(5);
  let lastname = await generetionString.gen_login(5);
  let password = await generetionString.gen_password(10)  // isn't used yet 

  await headerPage.clickRegisterMenuItem();
  
  let languagesList = await registerPage.getLanguagesList();
  let numLang = await generetionString.gen_languge((await languagesList));
  let languageTitle  = (await languagesList)[numLang];
  let optionElement = await page.getByText(languageTitle);
  let langValue = await optionElement.getAttribute('value');
  console.log('Element number of the array: ' + numLang);
  console.log('Language title: ' + (await languagesList)[numLang]); 
  console.log('Languge value: ' + langValue);

  await registerPage.setUserLoginInput(login);
  await registerPage.setUserPasswordInput('fjjfjf84KN');
  await registerPage.setUserPasswordConfirmationInput('fjjfjf84KN'); 
  await registerPage.setUserFirstnameInput(login);
  await registerPage.setUserLastnameInput(lastname);
  await registerPage.setUserEmailInput(login + '@dkd.com')
  await registerPage.selectLanguageSelect(langValue);
  await registerPage.setIrcNickInput(login);
  await registerPage.clickReceiveSubmit();    
  await loginPage.isVisibleNoticeBlock(login + '@dkd.com');

})

test('Verify on entering valid login and password, the customer can login', async ({ page }) => {  
  const header = new HeaderPage(page);
  const login = new LoginPage(page);
  const constants = new Constants();
  await header.goto();

  await header.clickLoginMenuItem();
  await login.setUsernameInput(constants.USER_NAME);
  await login.setPasswordInput(constants.PASSWORD);
  await login.setAutoLoginCheсkBox();
  await login.clickSubmitButton();
  await header.isMyAccountMenuItem();   
  
});

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

