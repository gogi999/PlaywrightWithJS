/*
await expect(locator).toBeDisabled()	Element is disabled
await expect(locator).toBeEditable()	Element is editable
await expect(locator).toBeEmpty()	Container is empty
await expect(locator).toBeFocused()	Element is focused
await expect(locator).toBeHidden()	Element is not visible
await expect(locator).toBeInViewport()	Element intersects viewport
await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
await expect(locator).toHaveClass()	Element has a class property
await expect(locator).toHaveCSS()	Element has CSS property
await expect(locator).toHaveId()	Element has an ID
await expect(locator).toHaveJSProperty()	Element has a JavaScript property
await expect(locator).toHaveRole()	Element has a specific ARIA role
await expect(locator).toHaveScreenshot()	Element has a screenshot
await expect(locator).toHaveValues()	Select has options selected
await expect(page).toHaveScreenshot()	Page has a screenshot
await expect(response).toBeOK()	Response has an OK status
*/
const { test, expect } = require('@playwright/test');

test('Assertions test', async ({ page }) => {
    // Open app url
    await page.goto('https://demo.nopcommerce.com/register')

    // 1) await expect(page).toHaveURL() --> Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) await expect(page).toHaveTitle() --> Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) await expect(locator).toBeVisible() --> Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // 4) await expect(locator).toBeEnabled() --> Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    // 5) await expect(locator).toBeChecked() --> Radio/Checkbox is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    // Checkbox
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    // 6) await expect(locator).toHaveAttribute() --> Element has a DOM attribute 
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    // 7) await expect(locator).toHaveText() --> Element matches text
    const pageTitle = await page.locator('.page-title h1')
    await expect(pageTitle).toHaveText('Register')

    // 8) await expect(locator).toContainText() --> Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg') // --> partial text

    // 9) await expect(locator).toHaveValue() --> Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // 10) await expect(locator).toHaveCount() --> List has exact number of children
    const options = await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13)
})