const { test, expect } = require('@playwright/test');

test('Handle frames', async ({ page }) => {
    // Open app url
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total number of frames
    const allFrames = await page.frames()
    // console.log('Number of frames:', allFrames.length)

    // Approach 1 - using name or url
    // const nameVar = await page.frame('name') // If the name is present
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // await frame1.fill('[name="mytext1"]', 'Hello')

    // Approach 2 - using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill('Hello')

    await page.waitForTimeout(5000)
})
