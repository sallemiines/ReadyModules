const chai = require('chai');
chai.use(require('chai-string'));
global.expect = chai.expect;

const takeScreenshot = err => this.client.takeScreenshot().then(() => {
    throw err;
});

global.test = (name, instructions) => it(name, () => {
    return instructions().catch();
});

global.scenario = (name, tests, clientName, close = false) =>
    describe(name, () => {
        const prestaClient = require('./clients/' + clientName);
        const client = new prestaClient();
        before(() => this.client = client);
        tests(client);
        if (close) {
            after(() => this.client.close());
        }
    });