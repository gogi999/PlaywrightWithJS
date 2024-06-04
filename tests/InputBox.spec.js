const { test, expect } = require('@playwright/test');

test('Handle Input box', async ({ page }) => {
    // Open app url
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    // Inputbox - first name
    await page.locator('//input[@id="name"]').toBeVisible()
    await page.locator('//input[@id="name"]').toBeEmpty()
    await page.locator('//input[@id="name"]').toBeEditable()
    await page.locator('//input[@id="name"]').toBeEnabled()

    await page.locator('//input[@id="name"]').fill('Jane')
    // await page.fill('//input[@id="name"]', 'Jane')

    await page.waitForTimeout(5000)
})