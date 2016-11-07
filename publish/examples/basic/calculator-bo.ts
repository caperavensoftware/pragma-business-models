/*
    This is a example of a simple object using the PragmaBusinessObject.
    This particular example does not make use of the a store but does have functionality that must be accessable from
    outside using the performAction method.

    see tests for usage details
*/
import {PragmaBusinessObject} from "./lib/pragma-business-object";

export enum CalculatorBOActions {
    add = 1000,
    delete = 1001,
    multiply = 1002,
    divide = 1003
}

export class CalculatorBO extends PragmaBusinessObject{
    initializeActions() {
        this.actions.set(CalculatorBOActions.add, this.add);
        this.actions.set(CalculatorBOActions.delete, this.delete);
        this.actions.set(CalculatorBOActions.multiply, this.multiply);
        this.actions.set(CalculatorBOActions.divide, this.divide);
    }

    private add(options) {
        return options.value1 + options.value2;
    }

    private delete(options) {
        return options.value1 - options.value2;
    }

    private multiply(options) {
        return options.value1 * options.value2;
    }

    private divide(options) {
        return options.value1 / options.value2;
    }
 }