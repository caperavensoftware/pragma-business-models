/*
    This is a exmaple of using the PragmaBusinessObject with a store.
    In this example we use work orders as a example business area.
    There is a basics store that pretends to load and save data, but this is for example purposes on the
    PragmaBusinessObject
*/

import {PragmaBusinessObject} from "./lib/pragma-business-object";
import {WorkOrderStore} from "./work-order-store";

export const WorkOrderBOActions = {
    status_approve: 1000,
    status_await_approval: 1001,
    status_cancel: 1002
};

export class WorkOrderBO extends PragmaBusinessObject {
    constructor() {
        super(new WorkOrderStore());
    }

    initializeActions() {
        super.initializeActions();
        this.actions.set(WorkOrderBOActions.status_approve, this.approveWorkOrder.bind(this));
        this.actions.set(WorkOrderBOActions.status_await_approval, this.awaitApproval.bind(this));
        this.actions.set(WorkOrderBOActions.status_cancel, this.cancelWorkOrder.bind(this));
    }

    approveWorkOrder() {
        this.dataStore.approveWorkOrder();
    }

    awaitApproval() {
        this.dataStore.awaitApproval();
    }

    cancelWorkOrder() {
        this.dataStore.cancelWorkOrder();
    }
}