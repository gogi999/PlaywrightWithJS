const { test, expect } = require('@playwright/test');

test('Handle Date Pickers/Calendars', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.fill('#datepicker', '09/09/2024')

    // Date picker
    const year = '2025'
    const month = 'March'
    const date = '23'

    await page.click('#datepicker') // Opens calendar
    
    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-year').textContent()

        if (currentYear == year && currentMonth == month) {
            break
        }

        await page.locator('[title="Next"]').click() // Next button 
    }
    /*
    // Date selection using loop
    const dates = await page.$$("//a[@class='ui-state-default']")

    for (const dt of dates) {
        if (await dt.textContent() === date) {
            await dt.click()
            break
        }
    }
    */
    // Date selection without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(3000)
})
