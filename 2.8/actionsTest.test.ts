import { ActionsPage } from "./actionsPage";
const page = new ActionsPage(); 
const fs = require('fs')

test('using actions', async () => {
    await page.navigate(); 
    await page.driver.sleep(5000); 
    await page.click(page.cookieBtn); 
    await page.canHover(page.newsBtn);
    await page.click(page.ruleChange); 
    await page.scrollToElement(page.baseRule); 
    await page.driver.sleep(1000); 
    await page.driver.quit(); 
})