const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.noticeBlock = page.locator('.notice#flash_notice');  
  
  }
 
  async isVisibleNoticeBlock(emailValue) {
    const visible = await this.noticeBlock.isVisible();
    await expect(this.noticeBlock).toContainText('Account was successfully created. An email containing the instructions to activate your account was sent to ' + emailValue ); // Учётная запись успешно создана. Для активации Вашей учётной записи пройдите по ссылке, которая выслана Вам по электронной почте.
  }
  
}