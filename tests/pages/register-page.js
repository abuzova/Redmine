const { expect } = require('@playwright/test');
exports.RegisterPage = class RegisterPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.userLoginInput = page.locator('input#user_login');  
    this.userPasswordInput = page.locator('input#user_password');
    this.userPasswordConfirmationInput = page.locator('input#user_password_confirmation');
    this.userFirstnameInput = page.locator('input#user_firstname');
    this.userLastnameInput = page.locator('input#user_lastname');
    this.userEmailInput = page.locator('input#user_mail');    
    this.languageSelect = page.locator('select#user_language'); 
    this.languageSelectList = page.locator('select#user_language option');
    this.ircNickInput = page.locator('input#user_custom_field_values_3');
    this.receiveSubmit = page.locator('.new_user input[type="submit"]');
  }

  async setUserLoginInput(loginValue) {
    await this.userLoginInput.type(loginValue);
    await expect(this.userLoginInput).toHaveValue(loginValue);
  } 
   
  async setUserPasswordInput(passwordValue) {
    await this.userPasswordInput.type(passwordValue); 
    await expect(this.userPasswordInput).toHaveValue(passwordValue);  
  }

  async setUserPasswordConfirmationInput(passwordConfirmationValue) {
    await this.userPasswordConfirmationInput.type(passwordConfirmationValue); 
    await expect(this.userPasswordConfirmationInput).toHaveValue(passwordConfirmationValue);     
  }

  async setUserFirstnameInput(firstNameValue) {
    await this.userFirstnameInput.type(firstNameValue); 
    await expect(this.userFirstnameInput).toHaveValue(firstNameValue);    
  }

  async setUserLastnameInput(lastNameValue) {
    await this.userLastnameInput.type(lastNameValue); 
    await expect(this.userLastnameInput).toHaveValue(lastNameValue);      
  }

  async setUserEmailInput(emailValue) {
    await this.userEmailInput.type(emailValue); 
    await expect(this.userEmailInput).toHaveValue(emailValue);      
  }

  async getLanguagesList() {
    return await this.languageSelectList.allTextContents(); 
  } 

  async selectLanguageSelect(selectLangValue) {
    await this.languageSelect.selectOption(selectLangValue); 
    await expect(this.languageSelect).toHaveValue(selectLangValue); 
  } 

  async setIrcNickInput(ircNickValue) {
    await this.ircNickInput.type(ircNickValue); 
    await expect(this.ircNickInput).toHaveValue(ircNickValue);      
  }

  async clickReceiveSubmit() {
    await this.receiveSubmit.click();     
    await expect(this.page).toHaveURL('https://www.redmine.org/login'); 
     
  } 
 
}
