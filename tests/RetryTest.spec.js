import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('test', async ({ page }) => {
    // Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login(process.env.USERNAME, process.env.PASSWORD) 
    await page.waitForTimeout(3000)
    
    // Home
    const home = new HomePage(page)
    await home.addProductToCart('Samsung galaxy s7')
    await page.waitForTimeout(3000)
    await home.gotoCart()

    // Cart
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Samsung galaxy s7')
    expect(await status).toBe(true)
})
