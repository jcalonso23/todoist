const { test, expect } = require('@playwright/test');

test('Create 10 Tasks', async ({ page }) => {

  console.log('Log In to Todoist...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await page.fill('input[name="email"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button.submit_btn.ist_button.ist_button_red.sel_login');
  await expect(page).toHaveTitle("Today: Todoist");

  await page.click('button.empty-state-button');
  for(let i=0; i<10; i++) {
    const random_name = Math.random().toString(36).substring(2,7);
    const task_name = 'Task-' + random_name;
    console.log('Creating task ' + i + ' : ' + task_name);
    await page.fill('.public-DraftStyleDefault-ltr', `${task_name}`);
    await page.click('button.reactist_button.reactist_button--primary');
    //const task_created = page.locator('.markdown_content.task_content');
    //await expect(task_created).toContainText(`${task_name}`);
  }

  console.log('Tasks created successfully!');

});
