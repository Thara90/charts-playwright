const base = require('@playwright/test');
const { ResultPage } = require('../pages/ResultPage');

exports.test = base.test.extend({
    resultPage: async ({ page }, use) => {
        await use(new ResultPage(page));
    }
});
exports.expect = base.expect;