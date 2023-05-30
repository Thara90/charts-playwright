const { test } = require('../base/base.js');
const testData = JSON.parse(JSON.stringify(require('../test-data/TestData.json')));

test.describe('E2E Test Suite', () => {

    test.beforeEach(async ({ resultPage }) => {
        await resultPage.LoadWebSite();
    });

    test('Validate programming languages statistics cloumn chart', async ({ resultPage }) => {
        await resultPage.ClickAllowAll();
        await resultPage.ClickExpand();
        await resultPage.AssertCloumnChart();
    });

    test.afterAll(async ({ page }) => {
        await page.close();
    });
    
});