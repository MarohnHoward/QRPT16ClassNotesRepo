import { googleScreenshot } from "./screenShotsPage";
const page = new googleScreenshot(); 
const fs = require('fs'); 

test('write a file', async () => {
    await page.navigate(); 
    await page.search('Labsky'); 
    let resultsText = await page.getResults(); 
    expect(resultsText).toContain('Labsky'); 
    //write a file with the test results
    await fs.writeFile(`${__dirname}/googleResults.png`, 
        await page.driver.takeScreenshot(), 'base64', (e) => {
        if (e) console.error(e)
        else console.log('page saved'); 
    }); 
    await page.driver.quit()
})