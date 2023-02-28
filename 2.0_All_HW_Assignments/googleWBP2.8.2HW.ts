import {By} from 'selenium-webdriver'
import { BasePage } from './basePage2.8.2HW'

export class Google extends BasePage {
    searchbar: By = By.name('q')
    results: By = By.id('rso')

    constructor() {
        super({url: 'https://www.google.com'})
    }

    async search(searchTerm: string) {
        return this.setInput(this.searchbar, `${searchTerm}\n`)
    }

    async getResults() {
        return this.getText(this.results)
    }
}