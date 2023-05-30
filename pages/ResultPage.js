const { expect } = require('@playwright/test');

exports.ResultPage = class ResultPage {

    constructor(page) {
        this.page = page;
        this.btnExpand = page.locator(`(//button[contains(@class,'button button--primary')])[1]`);
        this.btnAllowAll = page.locator(`//button[@id='onetrust-accept-btn-handler']`);
        //this.btnAllowAll = page.locator(`(//*[name()='rect'][@class='highcharts-point highcharts-color-0'])[1]`);
        this.columns = page.locator(`.highcharts-series-group > .highcharts-series-0 > .highcharts-point`);
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
        var columnsCount = await this.columns.count();
        for (let i = 1; i <= columnsCount; i++) {
        //console.log("Number of prgramming languages - " + await this.columns.count());
        }
    }
}