const { test, expect } = require('@playwright/test');

test('Handle WebTable/Pagination', async ({ page }) => {
    // Open app url
    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    // Total number of rows and columns
    const columns = await table.locator('thead tr th')
    // console.log('Number of columns:', await columns.count())

    const rows = await table.locator('tbody tr')
    // console.log('Number of rows:', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    // Select check box for product 3
    /*
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })
    await matchedRow.locator('input').check()
    */
    // Select multiple products by re-usable function
    /*
    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 2')
    await selectProduct(rows, page, 'Product 5')
    */
    // Print all product details using loop
    /*
    for (let i = 0; i < await rows.count(); i++) {
        const currentRow = rows.nth(i)
        const tds = currentRow.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }
    */
    // Read data from all the pages in the table
    const pages = await page.locator('.pagination li a')
    console.log('Number of pages of the table:', await pages.count())

    for (let p = 0; p< await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click()
        }

        for (let i = 0; i < await rows.count(); i++) {
            const currentRow = rows.nth(i)
            const tds = currentRow.locator('td')
    
            for (let j = 0; j < await tds.count() - 1; j++) {
                console.log(await tds.nth(j).textContent())
            }
        } 

        // await page.waitForTimeout(3000)
    }

    await page.waitForTimeout(5000)
})

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}
