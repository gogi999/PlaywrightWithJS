const { test, expect } = require('@playwright/test');

test('Keyboard actions', async ({ page }) => {
    // Open app url
    await page.goto('https://gotranscript.com/text-compare')

    // await page.locator('name="text1"').fill('Welcome to automation')
    await page.type('[name="text1"]', 'Welcome to automation')

    // Ctrl + A - select the text
    await page.keyboard.press('Control+A');

    // Ctrl + C - copy the text
    await page.keyboard.press('Control+C');

    // Tab - move on other text field
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Ctrl + V - paste the text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000)
})
