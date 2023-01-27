// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { LoginPage } = require('../pages/login-page.js');
const { Constants } = require('../helper/constants.js');


test.skip('Main menu', async ({ page }) => {
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

test.skip('Top menu', async ({ page }) => {
  const header = new HeaderPage(page); 
  await header.goto(); 

  await header.isProjectsPage();
  await header.isHelpPage();
  await header.isHomePage();
});

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