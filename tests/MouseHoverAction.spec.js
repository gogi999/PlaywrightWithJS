const { test, expect } = require('@playwright/test');

test('Mouse hover action', async ({ page }) => {
    // Open app url
    await page.goto('https://demo.opencart.com/')

    const desktops = await page.locator('//a[normalize-space()="Desktops"]')
    const macbook = await page.locator('//a[normalize-space()="Mac (1)"]')

    // Mouse hover
    await desktops.hover()
    await macbook.hover()

    await page.waitForTimeout(3000)
})
