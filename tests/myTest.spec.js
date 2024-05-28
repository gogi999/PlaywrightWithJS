import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill(process.env.USERNAME);
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill(process.env.PASSWORD);
  await page.getByRole('button', { name: 'Log in' }).click();
});