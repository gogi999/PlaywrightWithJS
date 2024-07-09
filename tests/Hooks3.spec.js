const { test, expect } = require('@playwright/test');

// Hooks - beforeEach, afterEach, beforeAll and afterAll

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()

    // Open app url
    await page.goto('https://www.demoblaze.com/index.html')

    // Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill(process.env.USERNAME)  
    await page.locator('#loginpassword').fill(process.env.PASSWORD) 
    await page.locator('//button[normalize-space()="Log in"]').click()
})

test.afterAll(async () => {
    // Logout
    await page.locator('#logout2').click()
})

test('Home Page Test', async () => {
    // Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
})

test('Add Product to Cart Test', async () => {
    // Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
})
