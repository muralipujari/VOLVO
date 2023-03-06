

import Page from './Page.js';

var backSiteNavigation = `//button[@aria-label='Go back in Site Navigation']`;


/**
 * sub page containing specific selectors and methods for a specific page
 */
class OurCars extends Page {

    
     /**
     * define menuButton using getter methods
     */
      get ourCarsButton () {
        return $('#nav:topNavCarMenu');
    }

     /**
     * Select OurCars
     */
      async selectOurCars (cars) {
          console.log("**********select our cars************");
          await super.waitForVisible(this.ourCarsButton);  // Customoized Method Which I have written and placed in Page.js file
          await browser.pause(5000);
          await this.ourCarsButton.click();
          await browser.pause(5000);
      }

    /**
     * validate List of cars
     * @param[item,subItem]  Ex :-About Volvo,Safety
     */
    async validateTypeOfCars (cars) {
        console.log("**********validateTypeOfCars************");
        await super.waitForVisible(this.ourCarsButton);  // Customoized Method Which I have written and placed in Page.js file
        await browser.pause(5000);
        for(var i=0;i<cars.length;i++){

          var flag=await $(`//p[contains(@data-sources,'Navigation')][text()='${cars[i]}']`).isDisplayed();

          if(flag == 'false')
               assert.fail("cars is Not available  :"+items[i]);
          else
               console.log("cars  is available as expected :"+items[i]);
      }
      
       
    }


      /**
         * it will check Table OR Column is available in Target  Tables/Columns are not
         * @data[CellValue]: you can mention Table/Coulmn values like AE,CONMEDS,.. OR AGE,SEX,RACE...
         * @data[Type] Need to mention Table Or Column   Table/Column
         * @data[Availability] Yes/No
         * @author Murali
         * @return void
         * @throws Exception
         */
       async validateElectricCars(input) {
          console.log('********validateElectricCars********');
  
          await super.waitForVisible(this.ourCarsButton);  // Customoized Method Which I have written and placed in Page.js file
          await browser.pause(5000);
    
          const elem=await $$(`//*[@data-component='ImageWithText']//h2`).getText();
  
          for(var i=0;i<input.length;i++){
              var flag=await $(`//*[text()='${input[i]}']`).isDisplayed();
  
              if(flag == 'false')
                   assert.fail("Electric is Not available :"+input[i]);
              else
                   console.log("Electric is available as expected :"+input[i]);
  
          }
  
         }  
   
}

export default new OurCars();
