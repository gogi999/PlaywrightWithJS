import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('Page Object Model - POM Pattern', async ({ page }) => {
    // Without POM
    /*
    await page.goto('https://demoblaze.com/index.html#')
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill(process.env.USERNAME) 
    await page.locator('#loginpassword').fill(process.env.PASSWORD) 
    await page.locator('//button[normalize-space()="Log in"]').click()
    */
    // Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(process.env.USERNAME, process.env.PASSWORD)
    await page.waitForTimeout(3000)
    
    // Home
    const home = new HomePage(page)
    await home.addProductToCart('Sony xperia z5')
    await page.waitForTimeout(3000)
    await home.gotoCart()

    // Cart
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Sony xperia z5')
    expect(await status).toBe(true)
})