

import Page from './Page.js';

var backSiteNavigation = `//button[@aria-label='Go back in Site Navigation']`;


/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuPage extends Page {

    
     /**
     * define menuButton using getter methods
     */
      get menuButton () {
        return $('#sitenav-sidenav-toggle');
    }

    

    /**
     * a method to click on Menu Button
     * and will select Menu Item and Sub Item Based on Parameters
     * @param[item,subItem]  Ex :-About Volvo,Safety
     */
    async selectMenuItem (item,subItem) {
        console.log("**********selectMenuItem************");
        await super.waitForVisible(this.menuButton);  // Customoized Method Which I have written and placed in Page.js file
        await browser.pause(5000);
        await this.menuButton.click();
        await browser.pause(5000);
        await $(`//*[text()='About Volvo']`).waitForDisplayed({ timeout: 60000 });
        await $(`//button/*[text()='${item}']/..`).click();
        await super.waitForVisible(backSiteNavigation);
        await $(`//a//*[text()='${subItem}']`).click();
    }

     /**
     * a method to click on Menu Button
     * and will select Menu Item and Sub Item Based on Parameters
     * @param[item,subItem]  Ex :-About Volvo,Safety
     */
      async VerifyMenuItems () {
        console.log("**********VerifyMenuItems************");
        await super.waitForVisible(this.menuButton);  
        await browser.pause(5000);
        await this.menuButton.click();
        await browser.pause(5000);
        var items=['Buy','Own','About Volvo','Explore','More'];   // For Now HardCode, we can pass the data from InputSheet
        
        for(var i=0;i<items.length;i++){
            var flag=await $(`//button/*[text()='${items[i]}']/..`).isDisplayed();

            if(flag == 'false')
                 assert.fail("Menu Item is Not available  :"+items[i]);
            else
                 console.log("Menu Item is available as expected :"+items[i]);

        }
        await $(`//*[@data-autoid="nav:siteNavCloseIcon"]`).click();
        await browser.pause(5000);
    }

      /**
         * it will check safety features
         * @author Murali
         * @return void
         * @throws Exception
         */
       async verifySafetyFeatures() {
        console.log('********verifySafetyFeatures********');

        await super.waitForVisible(`//*[@data-autoid='localSubMenu:linksContainer']`); 
        await $(`//*[@data-autoid='localSubMenu:linksContainer']//*[text()='Features']`).click(); 
        await browser.pause(3000);

        const elem=await $$(`//*[@data-component='ImageWithText']//h2`).getText();
        var input=['Lidar','Autonomous driving','Care key','Airbags','Connected safety','Airbags']

        for(var i=0;i<input.length;i++){
            var flag=await $(`/*[text()='${input[i]}']`).isDisplayed();

            if(flag == 'false')
                 assert.fail("Safety Item is Not available :"+input[i]);
            else
                 console.log("Safety Item is available as expected :"+input[i]);

        }

       }  
}

export default new MenuPage();
