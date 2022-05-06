const { test, expect } = require('@playwright/test');
const { TodoistDevPage } = require('./todoist_dev_page');

// Test - 01
test('Todoist Login Success', async ({ page }) => {
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
});

// Test - 02
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

// Test - 03
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

// Test - 04
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

// Test - 05
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

  await page.click('text=Add a task');
  await todoistDev.createTask(1);
  console.log('Task created successfully!');

});

// Test - 06
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
