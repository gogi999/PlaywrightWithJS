const { test, expect } = require('@playwright/test');

test('Mouse right click', async ({ page }) => {
    // Open app url
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button = await page.locator('//span[normalize-space()="right click me"]')

    // Right click action
    await button.click({ button: 'right' })

    await page.waitForTimeout(3000)
})
