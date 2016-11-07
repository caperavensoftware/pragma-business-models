import {expect} from 'chai';
import 'aurelia-polyfills';
import {WorkOrderModel} from './../src/work-order-model';

describe('WorkOrderModel Tests', function() {
    var workOrderModel;

    beforeEach(function() {
        workOrderModel = new WorkOrderModel ();
    });
    
    it('constructor', function() {
        expect(workOrderModel).to.not.be.null;
    });
});