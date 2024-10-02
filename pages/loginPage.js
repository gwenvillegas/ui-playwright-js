
exports.LoginPage = class LoginPage {
    constructor(page) {
        this.url = 'https://www.stackadapt.com/login';
        this.page = page;
        this.loginHeader = page.locator('#platform-container h1');
        this.email = page.locator('#login-email');
        this.password = page.locator('#login-password');
        this.recoverPassword = page.locator('[href="/login/reset"]').nth(0);
        this.rememberMe = page.getByText('Remember Me');
        this.loginButton = page.getByRole('button', {name: 'Log in'});
        this.useSSO = page.locator('[href="/login/sso"]').nth(1);
        this.errorMessage = page.locator('#helper-label-login-password');
    }


async navigate() {
    await this.page.goto(this.url);
}

async login(email, password) {
    await this.email.click();
    await this.email.fill(email);
    await this.password.click();
    await this.password.fill(password);
    // await this.loginButton.click();
    //page.locator('div').filter({has:page.locator([name="filter_by_price"])}).childnode.nth(1)
}

}