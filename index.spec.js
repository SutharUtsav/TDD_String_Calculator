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

    it('Calculate simple string with one element',()=>{
        assert.strictEqual(this.calculator.calculate('1'),1);
    })

    it('Calculate simple string with one element',()=>{
        assert.strictEqual(this.calculator.calculate('9'),9);
    })
    
    it('Calculate simple string with two element',()=>{
        assert.strictEqual(this.calculator.calculate('1,2'),3);
    })

    it('Calculate simple string with two element',()=>{
        assert.strictEqual(this.calculator.calculate('1,33'),34);
    })

    it('Calculate simple string with three element',()=>{
        assert.strictEqual(this.calculator.calculate('1,2,4'),7);
    })

    it('Calculate simple string with "\\n" delimiter ', () => {
        assert.strictEqual(this.calculator.calculate('1\n2','\n'), 3);
    });

    it('Calculate simple string with "\\n" delimiter ', () => {
        assert.strictEqual(this.calculator.calculate('5\n6\n7','\n'), 18);
    });

    it('Calculate simple string with ";" delimiter ', () => {
        assert.strictEqual(this.calculator.calculate('1;2', ';'), 3);
    });
})