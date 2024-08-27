// import the class from the page object file
import {GooglePage} from './googlePage'; 
// import what you need to run chrome; 
import {Builder, Capabilities, WebDriver, WebElement} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
// Build our instance of chrome 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
// pull over the class from the googlePage.ts and set it as a variable.
const googlePage = new GooglePage(driver); 
// write our test
test('do a search', async () => {
    await googlePage.navigate(); 
    await googlePage.search('Chicago Cubs'); 
    await googlePage.driver.sleep(2000); 
    await googlePage.getResults(); 
    await googlePage.driver.quit(); 
})