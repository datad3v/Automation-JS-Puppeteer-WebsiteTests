/**
 * @name abccompany login
 * @desc Navigates and logs into company site
 */

const puppeteer = require('puppeteer');
// launch puppeteer in debugging mode
puppeteer.launch({headless:false}).then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('-insert company website link here-');
    
    // username field


  await browser.close();
});
