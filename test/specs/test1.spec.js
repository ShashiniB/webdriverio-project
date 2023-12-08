describe('Demo Tests', function () {
    beforeEach(async () => {
        await browser.url('https://webdriver.io')
        browser.maximizeWindow();
    });

    it('should save some screenshots', async () => {
        // Save a full page screenshot
        await browser.saveFullPageScreen('fullPage', {})
    })

    it('should compare successful with a baseline', async () => {

        // Check a full page screenshot
        await expect(
            await browser.checkFullPageScreen('fullPage', {})
        ).toEqual(0)
})
})
