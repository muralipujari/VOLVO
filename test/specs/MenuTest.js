import HomePage from '../pageobjects/HomePage.js'
import MenuPage from '../pageobjects/MenuPage.js'
import OurCars from '../pageobjects/OurCars.js'



describe('Launch Volvo application', () => {

    before('OE Folder & login ',  async() =>{
        //Will write the code based on requirement
	});

    
    it('TC1 : Verify Menu Items', async () => {

       // Launch Browser and navigate to Home Page
       await HomePage.open();

       // Verify Menu Items
       await MenuPage.VerifyMenuItems();

    })

    it('TC2 :Verify Safety Items', async () => {

        //Selecting Safety Menu Item
        await MenuPage.selectMenuItem('About Volvo','Safety');

        //Verify Features in Safety
        await MenuPage.verifySafetyFeatures();
    })

    it('TC3 :Validate Our Cars', async () => {

        //Select OurCars
        await OurCars.selectOurCars();

        //Selecting Safety Menu Item
         var types=['Electric','Hybrids','Mild hybrids']   // HardCode Here, we have to pass from input data sheet

        //Verify Features in Safety
        await MenuPage.validateTypeOfCars(types);
    })

    it('TC4 :Validate List of Electric Cars', async () => {

        var electric=['Volvo EX90','XC40 Recharge','C40 Recharge']

         //Select OurCars
         await OurCars.selectOurCars();

        //Verify Features in Safety
        await OurCars.validateElectricCars(electric);
    })

    after('Logout',async () =>  {});

})


