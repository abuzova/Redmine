// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');
const { RegisterPage } = require('../pages/register-page.js');

test('Main menu', async ({ page }) => {
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

test('Top menu', async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goto();

  await header.isProjectsPage();
  await header.isHelpPage();
  await header.isHomePage();
});


test('Verify registering with valid credentials', async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goto();
  const register = new RegisterPage(page);

  await header.clickRegisterMenuItem();
  await register.setUserLoginInput('jjj');
  await register.setUserPasswordInput('hhh');
  await register.setUserPasswordConfirmationInput('hhh'); 
  await register.setUserFirstnameInput('Nike');
  await register.setUserLastnameInput('Angelus');
  await register.setUserEmailInput('aaaa@dkd.com')
  await register.selectLanguageSelect();
  await register.setIrcNickInput('fhfhfh');
  await register.clickReceiveSubmit();  

})