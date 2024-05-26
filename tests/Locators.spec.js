const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html#');

    // Click on login button - property
    await page.locator('id=login2').click();
    // await page.click('id=login2'); // -> same functionality as line above

    // Provide username - CSS
    await page.locator('#loginusername').fill('frcko36')
    // await page.fill('#loginusername', 'johny36'); // -> same functionality as line above
    // await page.type('#loginusername', 'johny36'); // -> same functionality as lines above

    // Provide password
    await page.fill('input[id="loginpassword"]', 'H1D3moglaze;');

    // Click on login button - XPath
    // await page.click('//button[normalize-space()="Log in"]');
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    // Verify logout link presence - XPath
    // const logoutLink = await page.locator('//a[normalize-space()="Log out"]');
    const logoutLink = await page.locator('//*[@id="logout2"]');

    await expect(logoutLink).toBeVisible();

    await page.close();
})
