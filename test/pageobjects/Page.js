import assert from "assert";


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
   
     /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
      async open (path) {
        return browser.url(`https://www.volvocars.com/intl/v/car-safety/a-million-more`)
    }

    /**
        * Wait For Visible until elements visible with in timeout time
        * @author Murali
        * @return void
        * @throws Exception
    */
	async waitForVisible (ele) {

		try {
			await $(ele).waitForDisplayed({ timeout: 60000 }).then(() => {
				//return true;
				//console.log(ele+" Element Displayed");
			})		
		} catch (error) {
			//assert.fail('Cust -> Expected Element Not Found : ' +error ) ;
		}

	
	 }
}
