const { test, expect } = require('@playwright/test');

test('Mouse double click', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    const buttonCopy = await page.locator('//button[normalize-space()="Copy Text"]')

    // Double click
    await buttonCopy.dblclick()

    const f2 = await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(3000)
})
