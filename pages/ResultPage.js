const { expect } = require('@playwright/test');

exports.ResultPage = class ResultPage {

    constructor(page) {
        this.page = page;
        this.btnExpand = page.locator(`(//button[contains(@class,'button button--primary')])[1]`);
        this.btnAllowAll = page.locator(`//button[@id='onetrust-accept-btn-handler']`);
        this.columnsLanguages= page.locator(`(//*[name()='rect'][@class='highcharts-point highcharts-color-0'])`);
        this.tooltipLanguage = page.locator(`//table[@class='tooltip']//tbody/tr[1]/td/span`);
        this.tooltipPercentage = page.locator(`//table[@class='tooltip']//tbody/tr[3]/td`);
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
        var columnsCount = await this.columnsLanguages.count();
        console.log("Number of Programming languages in chart : " + columnsCount);
        for (let i = 1; i <= columnsCount; i++) {
        await this.page.locator(`(//*[name()='rect'][@class='highcharts-point highcharts-color-0'])[${i}]`).hover();
        var tooltip_language = await this.tooltipLanguage.textContent();
        var tooltip_percentage = await this.tooltipPercentage.textContent();
        console.log("Programming language : " + tooltip_language + ", Percentage : " + tooltip_percentage);
        }
    }
}