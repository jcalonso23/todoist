const { test, expect } = require('@playwright/test');

test('Todoist Login 1st Attempt', async ({ page }) => {

  console.log('Log In 1st Attempt...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await page.fill('input[name="email"]', process.env.WRONG_USERNAME);
  await page.fill('input[name="password"]', process.env.WRONG_PASSWORD);
  await page.click('button.submit_btn.ist_button.ist_button_red.sel_login')
  await expect(page).toHaveTitle("Log in to Todoist")
  console.log('Log In Denied!');

});

test('Todoist Login 2nd Attempt', async ({ page }) => {

  console.log('Log In 2nd Attempt...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await page.fill('input[name="email"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('text=Log in')
  await expect(page).not.toHaveTitle("Today: Todoist")
  console.log('Log In Denied!');

});

test('Todoist Login 3rd Attempt', async ({ page }) => {

  console.log('Log In 3rd Attempt...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await page.fill('input[name="email"]', process.env.WRONG_USERNAME);
  await page.fill('input[name="password"]', process.env.WRONG_PASSWORD);
  await page.click('button.submit_btn.ist_button.ist_button_red.sel_login')
  await expect(page).not.toHaveTitle("Today: Todoist")
  console.log('Log In Denied!');

});
