const { test, expect } = require('@playwright/test');

test('Todoist Login Success', async ({ page }) => {

  console.log('Log In to Todoist...');
  await page.goto('https://todoist.com/');
  await expect(page).toHaveTitle("Todoist: The to do list to organize work & life");
  await page.click('text=Log in');
  await expect(page).toHaveTitle("Log in to Todoist");
  await page.fill('input[name="email"]', process.env.USERNAME);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button.submit_btn.ist_button.ist_button_red.sel_login');
  await expect(page).toHaveTitle("Today: Todoist");
  console.log('Log In Success!')

});

