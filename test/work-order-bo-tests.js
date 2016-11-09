import {expect} from 'chai';
import 'aurelia-polyfills';
import {WorkOrderBO, WorkOrderBOActions} from './../src/work-order-bo.js';
import {WorkOrderStatus} from "./../src/work-order-model.js";
import {PragmaBOActions} from "./../src/lib/pragma-business-object.js";

describe('WorkOrderBO Tests', function() {
    var workOrderBO;

    beforeEach(function() {
        workOrderBO = new WorkOrderBO ();
        workOrderBO.performAction(PragmaBOActions.create);
    });
    
    it('constructor', function() {
        expect(workOrderBO).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => WorkOrderBO()).to.throw("Cannot call a class as a function");
    });

    it('status_approve', function() {
        // Act
        workOrderBO.performAction(WorkOrderBOActions.status_approve);

        // Assert
        expect(workOrderBO.model.status).to.equal(WorkOrderStatus.Approved);
    });

    it('status_await_approval', function() {
        // Act
        workOrderBO.performAction(WorkOrderBOActions.status_await_approval);

        // Assert
        expect(workOrderBO.model.status).to.equal(WorkOrderStatus.AwaitingApproval);
    });

    it('status_cancel', function() {
        // Act
        workOrderBO.performAction(WorkOrderBOActions.status_cancel);

        // Assert
        expect(workOrderBO.model.status).to.equal(WorkOrderStatus.Canceled);
    });
});