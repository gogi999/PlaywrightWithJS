const { test, expect } = require('@playwright/test');

test('Handle checkboxes', async ({ page }) => {
    // Open app url
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // Single checkbox
    await page.locator('//*[@id="checkBoxOption1"]').check()
    // await page.check('//*[@id="checkBoxOption1"]')

    expect(await page.locator('//*[@id="checkBoxOption1"]')).toBeChecked()
    expect(await page.locator('//*[@id="checkBoxOption1"]').isChecked()).toBeTruthy()

    expect(await page.locator('//*[@id="checkBoxOption2"]').isChecked()).toBeFalsy()

    // Multiple checkboxes
    const checkboxLocators = ['//*[@id="checkBoxOption1"]', '//*[@id="checkBoxOption3"]']

    // Select multiple checkboxes
    for (const locator of checkboxLocators) {
        await page.locator(locator).check()
    }

    // Unselect multiple checkboxes
    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck()
        }
        
    }

    // await page.waitForTimeout(5000)
})