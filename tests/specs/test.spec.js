// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { RegisterPage } = require('../pages/register-page.js');
const { LoginPage } = require('../pages/login-page.js');
const { RandomStringGeneration } = require('../helper/generetion.js');

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