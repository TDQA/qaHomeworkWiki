import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name("hdrInput") //fill in the blank
    const mkeInput: By = By.name("mkeInput") //fill in the blank
    const oaiInput: By = By.name("oriInput") //fill in the blank
    const nameInput: By = By.name("namInput") //fill in the blank
    const clrBtn: By = By.id("clearBtn") //fill in blank 
    const submitBtn: By = By.id("saveBtn") //fill in blank
    const errorMsg: By = By.xpath('//p[text() = "Errors Received:"]') // fill in blank 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Arrest")
        await driver.findElement(mkeInput).sendKeys("12345")
        await driver.findElement(oaiInput).sendKeys("CI983")
        await driver.findElement(nameInput).sendKeys("Joe the King")
        await driver.findElement(submitBtn).click()
        let errorMessages = await driver.findElement(errorMsg).getText()
        expect(errorMessages).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})
