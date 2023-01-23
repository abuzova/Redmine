const { expect } = require('@playwright/test');
exports.HeaderPage = class HeaderPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // horizontal main menu
    this.overviewMenuItem = page.locator('#main-menu li:nth-child(1) a');  
    this.downloadMenuItem = page.locator('#main-menu li:nth-child(2) a');
    this.activityMenuItem = page.locator('#main-menu li:nth-child(3) a');
    this.roadmapMenuItem = page.locator('#main-menu li:nth-child(4) a');
    this.issuesMenuItem = page.locator('#main-menu li:nth-child(5) a');
    this.newsMenuItem = page.locator('#main-menu li:nth-child(6) a');
    this.wikiMenuItem = page.locator('#main-menu li:nth-child(7) a');
    this.forumsMenuItem = page.locator('#main-menu li:nth-child(8) a');
    this.repositoryMenuItem = page.locator('#main-menu li:nth-child(9) a'); 
    
    // top menu    
    this.homeMenuItem = page.locator('#top-menu ul .home');
    this.projectsMenuItem = page.locator('#top-menu ul .projects');
    this.helpMenuItem = page.locator('#top-menu ul .help'); 

    // search    
    this.searchField = page.locator('//*[@id="header"]//label/a[@href="/projects/redmine/search"]/following::input');
 
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }

   // horizontal main menu
  async isOverviewPage() {
    await this.overviewMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine');   
  }

  async isDownloadPage() {
    await this.downloadMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');     
  }

  async isActivityPage() {
    await this.activityMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/activity');     
  }

  async isRoadmapPage() {
    await this.roadmapMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/roadmap');     
  }

  async isIssuesPage() {
    await this.issuesMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/issues');     
  }

  async isNewsPage() {
    await this.newsMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/news');     
  }

  async isWikiPage() {
    await this.wikiMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/wiki');     
  }

  async isForumsPage() {
    await this.forumsMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/boards');     
  }

  async isRepositoryPage() {
    await this.repositoryMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/repository');     
  }

  // top menu 
  async isProjectsPage() {
    await this.projectsMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/projects');   
  }

  async isHelpPage() {
    await this.helpMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/guide');     
  }

  async isHomePage() {
    await this.homeMenuItem.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/');     
  }
  
  // search
}
