const { test, expect } = require('@playwright/test');

test('Page screenshot', async ({ page }) => {
    // Open app url
    await page.goto('https://demoblaze.com/index.html#')

    await page.getByRole('link', { name: 'Log in' }).click()
    await page.locator('#loginusername').fill(process.env.USERNAME)
    await page.locator('#loginpassword').fill(process.env.PASSWORD)
    await page.getByRole('button', { name: 'Log in' }).click()
})
