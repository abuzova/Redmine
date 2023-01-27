const { expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#login-form #username');  
    this.passwordInput = page.locator('#login-form #password');
    this.autoLoginCheсkBox = page.locator('//input[@id="autologin"]');
    this.submitButton = page.locator('#login-form input[type="submit"]'); 
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