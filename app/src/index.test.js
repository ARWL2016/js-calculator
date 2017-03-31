const expect = require('expect');
const fs = require('fs');
const jsdom = require('jsdom');

describe('Check test setup', () => {
    it('should run a test', () => {
        expect(true).toEqual(true);
    });
});

describe('index.html', () => {
    const index = fs.readFileSync('./app/index.html', 'utf-8');
    it('should have a p#display equal to 0', (done) => {
        jsdom.env(index, function(err, window) {
            const display = window.document.getElementById('display');
            expect(display.innerHTML).toEqual(0);
            done();
            window.close();
        });
    });
    it('should have a p#subDisplay equal to Ans', (done) => {
        jsdom.env(index, function(err, window) {
            const subDisplay = window.document.getElementById('subDisplay');
            expect(subDisplay.innerHTML).toEqual('Ans');
            done();
            window.close();
        });
    });
});