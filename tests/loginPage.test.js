const { expect, test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage/');

test(`Login page is loaded`, async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();    
    await expect(loginPage.loginHeader).toBeVisible();
})

test(`Error prompts no email and password inputted`, async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();    
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toContainText('You need to sign in or sign up before continuing.');
})


