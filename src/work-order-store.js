import {WorkOrderModel, WorkOrderStatus} from "./work-order-model";

export class WorkOrderStore {
    model;

    load(options) {
        this.model = new WorkOrderModel();
        this.model.id = options.id;
        this.model.code = options.code;
        this.model.description = options.description;

        return true;
    }

    create() {
        this.model = new WorkOrderModel();
        return true;
    }

    save() {
        return true;
    }

    delete() {
        return true;
    }

    canSave() {
        return true;
    }

    canDelete() {
        return true;
    }

    isValid() {
        return true;
    }

    approveWorkOrder() {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.Approved;
        return true;
    }

    cancelWorkOrder() {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.Canceled;
        return true;
    }

    awaitApproval() {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.AwaitingApproval;
        return true;
    }
}