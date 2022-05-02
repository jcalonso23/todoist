const { test, expect } = require('@playwright/test');
const { TodoistDevPage } = require('./todoist_dev_page');

test('Create 10 Tasks', async ({ page }) => {
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
  for(let i=0; i<10; i++) {
    await todoistDev.createTask(i);
  }

  console.log('Tasks created successfully!');

});
