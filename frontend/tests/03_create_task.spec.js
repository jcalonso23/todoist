const { test, expect } = require('@playwright/test');

test('Create a New Task', async ({ page }) => {

  console.log('Log In to Todoist...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await page.fill('input[name="email"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button.submit_btn.ist_button.ist_button_red.sel_login');
  await expect(page).toHaveTitle("Today: Todoist");

  console.log('Creating a task...');
  await page.click('button.empty-state-button');
  await page.fill('.public-DraftStyleDefault-ltr', 'Task-1: QA_Challenge');
  await page.click('button.reactist_button.reactist_button--primary');
  const task = page.locator('.markdown_content.task_content');
  await expect(task).toContainText("Task-1: QA_Challenge");
  console.log('Task created successfully!');

});
