const { test, expect } = require('@playwright/test');

// Reporters - List, Dot, JSON, JUnit & HTML
test('Test1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page).toHaveTitle('STORE')

    await page.waitForTimeout(3000)
})

test('Test2', async ({ page }) => {
    await page.goto('https://demo-opencart.com/')
    await expect(page).toHaveTitle('Your Store')

    await page.waitForTimeout(3000)
})

test('Test3', async ({ page }) => {
    await page.goto('https://www.nopcommerce.com/en')
    await expect(page).toHaveTitle('Free and open-source eCommerce platform. ASP.NET Core based shopping cart. - nopCommerce')

    await page.waitForTimeout(3000)
})
