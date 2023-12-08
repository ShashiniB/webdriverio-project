const percySnapshot = require('@percy/webdriverio');
describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    await browser.url('https://webdriver.io');
    await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    await percySnapshot('webdriver.io page');
  });
});

// describe('Image comparison', async() =>{
//     beforeEach(async()=>{
//         await browser.url('https://www.testim.io/')
//         browser.maximizeWindow();
//     });

//     it('visual test on home page', async()=>{
//         expect(await browser.checkScreen('testim-homepage',{})).toEqual(0);
//     })

//     it('visual test on contact us page', async()=>{
//         await $('[class="btn default"]').click()
//         await browser.pause(2000);
//         expect(await browser.checkScreen('testim-contactpage',{})).toEqual(0)
//     })

    // it('visual test full screen on contact us page', async()=>{
    //     await $('[class="btn default"]').click()
    //     await browser.pause(2000);
    //     expect(await browser.checkScreen('testim-fullscreen-contactpage',{})).toEqual(0)
    // })

    
    // it('visual test on search', async()=>{
    //     await $('#twotabsearchtextbox').setValue('tshirt');
    //     await browser.pause(2000);
    //     expect(await browser.checkElement(await $('#nav-flyout-searchAjax'),'searchbar-suggestions',{})).toEqual(0);
    // })



// });
