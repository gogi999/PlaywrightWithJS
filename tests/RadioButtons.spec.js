const { test, expect } = require('@playwright/test');

test('Handle radio button', async ({ page }) => {
    // Open app url
    await page.goto('https://demo.nopcommerce.com/register')

    // Radio button
    await page.locator('//input[@id="gender-female"]').check()
    // await page.check('//input[@id="gender-female"]')
    await expect(await page.locator('//input[@id="gender-female"]')).toBeChecked()
    await expect(await page.locator('//input[@id="gender-female"]').isChecked()).toBeTruthy()

    await expect(await page.locator('//input[@id="gender-male"]').isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)
})