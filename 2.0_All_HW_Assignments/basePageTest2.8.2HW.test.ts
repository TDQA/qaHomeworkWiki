import { Google } from "./googleWBP2.8.2HW";
const fs = require('fs')

const google = new Google()

test('Do a Google search of favorite show', async () => {
    await google.navigate()
    await google.search('The Wire')
    let text = await google.getResults()
    expect(text).toContain("The Wire")

    await fs.writeFile(`${__dirname}/faveshow.txt`, text, (e) => {
        if (e) console.log(e)
        else console.log('Save Successful')
    })

    await fs.writeFile(`${__dirname}/googleScreenshot.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if(e) console.error(e)
        else console.log('Save Successful')
    })

    await google.driver.quit()
})