const { expect } = require('@playwright/test');

exports.ResultPage = class ResultPage {

    constructor(page) {
        this.page = page;
        this.btnExpand = page.locator(`(//button[contains(@class,'button button--primary')])[1]`);
        this.btnAllowAll = page.locator(`//button[@id='onetrust-accept-btn-handler']`);
    }
    async LoadWebSite() {
        await this.page.goto('https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/');
    }
    async ClickExpand() {
        await this.btnExpand.click();
    }
    async ClickAllowAll() {
        await this.btnAllowAll.click();
    }
    async AssertCloumnChart() {

    }
}