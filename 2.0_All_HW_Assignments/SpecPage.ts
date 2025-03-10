import { By, until, WebDriver } from "selenium-webdriver"

export class SpecPage {
    driver: WebDriver;
    url: string = "https://www.google.com"
    searchBar: By = By.name('q')
    results: By = By.id('rso')

    constructor(driver: WebDriver) {
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(this.searchBar))
        return await this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async doSearch(search: string) {
        return this.sendKeys(this.searchBar, `${search}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}
