const { test, expect } = require('@playwright/test');

test('Upload single file', async ({ page }) => {
    // Open app url
    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/NextJS-Ebook.pdf')

    await page.waitForTimeout(3000)
})

test.only('Upload multiple files', async ({ page }) => {
    // Open app url
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator('#filesToUpload')
        .setInputFiles([
            'tests/uploadFiles/NextJS-Ebook.pdf', 
            'tests/uploadFiles/ReactJS-Guide.pdf'
        ])
    
    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)'))
        .toHaveText('NextJS-Ebook.pdf')
    expect(await page.locator('#fileList li:nth-child(2)'))
        .toHaveText('ReactJS-Guide.pdf')

    await page.waitForTimeout(3000)

    // Removing files
    await page.locator('#filesToUpload').setInputFiles([])

    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)'))
        .toHaveText('No Files Selected')

    await page.waitForTimeout(3000)
})
