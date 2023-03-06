

import Page from './Page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
   
     /**
     * overwrite specific options to adapt it to page object
     */
      async open () {
        console.log("**********Open************");
        await super.open();
        await browser.maximizeWindow();
		await browser.pause(500);

        if(await $(`//*[@id="onetrust-accept-btn-handler"]`).isDisplayed())
            await $(`//*[@id="onetrust-accept-btn-handler"]`).click();

        await super.waitForVisible(`//*[text()='Menu']`); 

        // const eleme = await $(`//*[@id="onetrust-accept-btn-handler"]`);   
        // await expect(eleme).not.toBeExisting();

    }
}

export default new HomePage();
