const { test, expect } = require('@playwright/test');
const { TodoistDevPage } = require('./todoist_dev_page');

test('Todoist Login 1st Attempt', async ({ page }) => {
  const todoistDev = new TodoistDevPage(page);

  console.log('Log In 1st Attempt...');
  await todoistDev.goto();
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");

  await todoistDev.gotoLoginPage();
  await expect(todoistDev.page).toHaveTitle("Log in to Todoist");

  await todoistDev.wrongCredentials();
  await todoistDev.loginButton();
  await expect(page).toHaveTitle("Log in to Todoist")
  console.log('Log In Denied!');

});

test('Todoist Login 2nd Attempt', async ({ page }) => {
  const todoistDev = new TodoistDevPage(page);

  console.log('Log In 2nd Attempt...');
  await todoistDev.goto();
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");

  await todoistDev.gotoLoginPage();
  await expect(todoistDev.page).toHaveTitle("Log in to Todoist");

  await todoistDev.goodCredentials();
  await todoistDev.wrongLoginButton();  
  await expect(page).not.toHaveTitle("Today: Todoist")
  console.log('Log In Denied!');

});

test('Todoist Login 3rd Attempt', async ({ page }) => {
  const todoistDev = new TodoistDevPage(page);

  console.log('Log In 3rd Attempt...');
  await todoistDev.goto();
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");

  await todoistDev.gotoLoginPage();
  await expect(todoistDev.page).toHaveTitle("Log in to Todoist");

  await todoistDev.wrongCredentials();
  await todoistDev.wrongLoginButton();
  await expect(page).not.toHaveTitle("Today: Todoist")
  console.log('Log In Denied!');

});
