import { test, expect } from '@playwright/test';

// only
/*test.only('test1', async ({ page }) => {
    console.log('This is test1...')
});*/

// skip
/*test.skip('test2', async ({ page }) => {
    console.log('This is test2...')
});*/

/*test('test3', async ({ page, browserName }) => {
    console.log('This is test3...')

    if (browserName === 'chromium') {
        test.skip()
    }
});*/

// Fixme
/*test('test4', async ({ page }) => {
    test.fixme()
    console.log('This is test4...')
});*/

// Fail
/*test('test5', async ({ page }) => {
    test.fail() // Expecting
    console.log('This is test5...')
    expect(1).toBe(2) // Actual - if both expecting and actual is failed, then test pass
});*/

/*test('test6', async ({ page, browserName }) => {
    console.log('This is test6...')

    if (browserName === 'firefox') {
        test.fail() // Expecting
    }
});*/

// Slow
test('test7', async ({ page }) => {
    // test.slow()
    test.setTimeout(5000)
    console.log('This is test7...')
    await page.goto('https://www.demoblaze.com/index.html')
})