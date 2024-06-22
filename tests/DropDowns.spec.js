const { test, expect } = require('@playwright/test');

test('Handle dropdown', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select option from the dropdown:
    // await page.locator("#country").selectOption({ label: 'Canada' }) // By using label visible text
    // await page.locator("#country").selectOption('Canada') // By using visible text
    // await page.locator("#country").selectOption({ value: 'uk' }) // By using value attribute
    // await page.locator("#country").selectOption({ index: 1 }) // By using index number
    // await page.selectOption("#country", 'Germany') // By text

    // Assertions:
    // 1) Check number of options in dropdown - approach 1
    // const options1 = await page.locator('#country option')
    // await expect(options1).toHaveCount(10)

    // 2) Check number of options in dropdown - approach 2
    // const options2 = await page.$$('#country option')
    // console.log('Number of options: ', options2.length)
    // await expect(options2.length).toBe(10)

    // 3) Check presence of value in the dropdown - approach 1
    // const content1 = await page.locator('#country').textContent()
    // await expect(content1.includes('Brazil')).toBeTruthy()

    // 4) Check presence of value in the dropdown - approach 2 - using looping
    /*
    const options3 = await page.$$('#country option')
    let status = false

    for (const option of options3) {
        // console.log(await option.textContent())
        let value = await option.textContent()

        if (await value === 'France') {
            status = true
            break
        }
    }

    expect(status).toBeTruthy()
    */
    // 5) Select option from dropdown using loop
    const options4 = await page.$$('#country option')

    for (const option of options4) {
        // console.log(await option.textContent())
        let value = await option.textContent()

        if (await value === 'Australia') {
            await page.selectOption('#country', value)
            break
        }
    }

    await page.waitForTimeout(5000)
})