import {expect} from 'chai';
import {CalculatorBO, CalculatorBOActions} from './../src/calculator-bo.js'

describe('CalculatorBO Tests', function() {
    var calculatorBO;

    beforeEach(function() {
        calculatorBO = new CalculatorBO ();
    });
    
    it('constructor', function() {
        expect(calculatorBO).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => CalculatorBO()).to.throw("Cannot call a class as a function");
    });

    it('add', function() {
        // Act
        const result = calculatorBO.performAction(CalculatorBOActions.add, {value1: 1, value2: 2});

        // Assert
        expect(result).to.equal(3, 'result of adding should be 3');
    });

    it('delete', function() {
        // Act
        const result = calculatorBO.performAction(CalculatorBOActions.delete, {value1: 1, value2: 2});

        // Assert
        expect(result).to.equal(-1, 'result of delete should be -1');
    });

    it('multiply', function() {
        // Act
        const result = calculatorBO.performAction(CalculatorBOActions.multiply, {value1: 1, value2: 2});

        // Assert
        expect(result).to.equal(2, 'result of multiply should be 2');
    });

    it('divide', function() {
        // Act
        const result = calculatorBO.performAction(CalculatorBOActions.divide, {value1: 1, value2: 2});

        // Assert
        expect(result).to.equal(0.5, 'result of adding should be 0.5');
    });

    it('not a function, return null', function() {
        // Act
        const result = calculatorBO.performAction(22, {value1: 1, value2: 2});

        // Assert
        expect(result).to.be.null;
    });

    it('model, expected to be null', function() {
        expect(calculatorBO.model).to.be.null;
    })
});