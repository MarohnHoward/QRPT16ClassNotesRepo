import { BasePage } from "../2.7/basePage";
import { By } from "selenium-webdriver";
const fs = require('fs'); 

export class ActionsPage extends BasePage {
    cookieBtn: By = By.id('onetrust-accept-btn-handler'); 
    newsBtn: By = By.xpath('(//span[text()="News"])[1]'); 
    ruleChange: By = By.xpath('(//a[text()="Rule Changes"])[1]'); 
    baseRule: By = By.xpath('//div[@class="l-grid__content l-grid__content--flat-card t-secondary u-app-hide"]'); 
    constructor() {
        super({url: 'https://www.mlb.com/'}); 
    }; 

    async canHover(elementBy: By) {
        const hover = this.driver.actions(); 
        const startElement = await this.getElement(elementBy); 
        await this.actionWiggle(hover, startElement, 100); 
        await hover.perform(); 
        await fs.writeFile(`${__dirname}/hoverPhoto.png`,
            await this.driver.takeScreenshot(), "base64", 
            (e) => {
                if(e) console.error(e)
                    else console.log('pagesaved')
            }); 
    }; 

    async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    }; 
}; 