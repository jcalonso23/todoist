const { expect } = require('@playwright/test');

exports.TodoistDevPage = class TodoistDevPage {

  constructor(page) {
    this.page = page;
    this.submitButton = page.locator('button[type="submit"]');
    this.username = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.fillTaskName = page.locator('.public-DraftStyleDefault-ltr');
    this.taskName = page.locator('.items'); 
 }

  async goto() {
    await this.page.goto('https://todoist.com/');
  }

  async gotoLoginPage() {
    await this.page.click('text=Log in');
  }

  async loginButton() {
    await this.submitButton.click();
  }

  async wrongLoginButton() {
    await this.page.click('text=Log in');
  }

  async goodCredentials() {
    await this.username.fill(process.env.USERNAME);
    await this.password.fill(process.env.PASSWORD);
  }

  async wrongCredentials() {
    await this.username.fill(process.env.WRONG_USERNAME);
    await this.password.fill(process.env.WRONG_PASSWORD);
  }

  async createTask(i) {
    const random_name = Math.random().toString(36).substring(2,7);
    const task_name = 'Task-' + random_name;
    console.log('Creating task ' + i + ' : ' + task_name);
    await this.fillTaskName.fill(`${task_name}`);
    await this.submitButton.click();

    await expect(this.taskName).toContainText(`${task_name}`);
  }
}
