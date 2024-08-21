import { Builder, By, Capabilities, WebDriver, WebElement} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

describe('Practice locators in testing', () => {
    beforeEach(async () => {
        await driver.get('https://www.google.com/'); 
    }); 
    afterAll(async () => {
        await driver.quit(); 
    }); 

    const searchBar: By = By.name('q'); 
    const results: By = By.id('rcnt'); 
// ! const variableName: By = By.methodOfLocation('value')

    test('searching for baseball scores', async () => {
        await driver.findElement(searchBar).sendKeys('Chicago Cubs\n'); 
        let resultsText = await driver.findElement(results).getText(); 
        expect(resultsText).toContain('Chicago Cubs'); 
        await driver.sleep(3000); 
    }); 
}); 