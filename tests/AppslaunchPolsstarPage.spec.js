// @ts-nocheck
const { test, expect } = require('@playwright/test');
const Homepage = require('../../test-data/Homepage.json');

var token

test('Validating polestar homepage navigation', async ({ page }) => {

    //Log into collection module
    var landingpage = PolstarLandingPage
    var PolstarGlobalPage = PolstarGlobalPage

    await test.step("Navigate to Polestar launch page", async () => {
        // @ts-ignore
        await page.goto("https://www.polestar.com/se/developer/get-started/")
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState('networkidle')
        await page.waitForLoadState('load')

            //user click on Polestar text link
        const polestarnavigationlink =  await page.waitForSelector(landingpage.PolestarTextHomepagetext, {state: "visible"})
        polestarnavigationlink.click();
    });

           //global page of polestar validation
    await test.step("Validate polestar global page details", async () => {
        // @ts-ignore
        
        await page.waitForLoadState('domcontentloaded')
        await expect(page).toHaveURL('https://www.polestar.com/global');

            //user click on Polestar text link
        
            const Polestrlocalink =  await page.waitForSelector(PolstarGlobalPage.PolestarLocationslink).toBeEnabled();
            Polestrlocalink.click();
            await expect(PolstarGlobalPage.Findspace).toContainText('Find a space');

        });
    })

