// @ts-check
const { test, expect } = require('@playwright/test');
const { HeaderPage } = require('../pages/header-page.js');

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