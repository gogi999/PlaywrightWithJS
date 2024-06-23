const { test, expect } = require('@playwright/test');

test('Handle multi select dropdown', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select multiple options from multi select dropdown
    // await page.selectOption('#colors', ['Blue', 'Red', 'Yellow'])

    // Assertions
    // 1) Check number of options in dropdown
    // const options1 = await page.locator('#colors option')
    // await expect(options1).toHaveCount(5)

    // 2) Check number of options in dropdown using JS array
    // const options2 = await page.$$('#colors option')
    // console.log('Number of options: ', options2.length)
    // await expect(options2.length).toBe(5)

    // 3) Check presence of value in  the dropdown
    const textValue = await page.locator('#colors').textContent()
    await expect(textValue.includes('Blue')).toBeTruthy()
    await expect(textValue.includes('Black')).toBeFalsy()

    await page.waitForTimeout(5000)
})