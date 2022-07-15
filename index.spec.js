const assert = require('assert');
const StringCalculator = require('./index.js');

describe('Test',()=>{
    var calculator;
    beforeEach(()=>{
        this.calculator = new StringCalculator();
    })

    it('Calculate empty string',()=>{
        assert.strictEqual(this.calculator.calculate(''),0);
    })
})