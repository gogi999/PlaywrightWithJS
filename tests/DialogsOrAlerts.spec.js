const { test, expect } = require('@playwright/test');

test.skip('Alert with OK', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click('//button[normalize-space()="Alert"]')

    await page.waitForTimeout(5000)
})

test.skip('Confirmation dialog - alert with OK and Cancel', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() // Close by using OK button
        // await dialog.dismiss() // Close by using Cancel button
    })

    await page.click('//button[normalize-space()="Confirm Box"]')

    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
})

test('Prompt dialog', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John')
        
    })

    await page.click("//button[@onclick='myFunctionPrompt()']")

    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(5000)
})
