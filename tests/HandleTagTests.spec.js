const { test, expect } = require('@playwright/test');

test('How to tag tests', async ({ page }) => {
    // Open app url
    await page.goto('https://demoblaze.com/index.html#')
    
})
