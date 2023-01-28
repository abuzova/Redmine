const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.noticeBlock = page.locator('.notice#flash_notice'); 
    this.usernameInput = page.locator('#login-form #username');  
    this.passwordInput = page.locator('#login-form #password');
    this.autoLoginCheсkBox = page.locator('//input[@id="autologin"]');
    this.submitButton = page.locator('#login-form input[type="submit"]'); 
  
  }
 
  async isVisibleNoticeBlock(emailValue) {
    const visible = await this.noticeBlock.isVisible();
    await expect(this.noticeBlock).toContainText('Account was successfully created. An email containing the instructions to activate your account was sent to ' + emailValue ); // Учётная запись успешно создана. Для активации Вашей учётной записи пройдите по ссылке, которая выслана Вам по электронной почте.
  
  }
 
  async setUsernameInput(usernameValue) {
    await this.usernameInput.type(usernameValue); 
    await expect(this.usernameInput).toHaveValue(usernameValue);  
  }

  async setPasswordInput(passwordValue) {
    await this.passwordInput.type(passwordValue); 
    await expect(this.passwordInput).toHaveValue(passwordValue);      
  }

  async setAutoLoginCheсkBox() {
    await this.autoLoginCheсkBox.setChecked(true); 
    await expect(this.autoLoginCheсkBox).toBeChecked();     
  }

  async clickSubmitButton() {
    await this.submitButton.click(); 
  }
  
}