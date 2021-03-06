import {expect} from 'chai';
import 'aurelia-polyfills';
import {WorkOrderModel} from './../src/work-order-model.js';

describe('WorkOrderModel Tests', function() {
    var workOrderModel;

    beforeEach(function() {
        workOrderModel = new WorkOrderModel ();
    });
    
    it('constructor', function() {
        expect(workOrderModel).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => WorkOrderModel()).to.throw("Cannot call a class as a function");
    });
});