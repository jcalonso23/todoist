const { test, expect } = require('@playwright/test');
const { TodoistDevPage } = require('./todoist_dev_page');

test('Create a New Task', async ({ page }) => {
  const todoistDev = new TodoistDevPage(page);

  console.log('Log In to Todoist...');
  await todoistDev.goto();
  await expect(todoistDev.page).toHaveTitle("Todoist: The to do list to organize work & life");

  await todoistDev.gotoLoginPage();
  await expect(todoistDev.page).toHaveTitle("Log in to Todoist");

  await todoistDev.goodCredentials();
  await todoistDev.loginButton();
  await expect(todoistDev.page).toHaveTitle("Today: Todoist");
  console.log('Log In Success!')

  await page.click('button.empty-state-button');
  await todoistDev.createTask(1);
  console.log('Task created successfully!');

});
