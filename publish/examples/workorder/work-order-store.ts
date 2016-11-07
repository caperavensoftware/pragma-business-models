import {IPragamBusinessDataStore} from "./types/IPragamBusinessDataStore";
import {WorkOrderModel, WorkOrderStatus} from "./work-order-model";

export class WorkOrderStore implements IPragamBusinessDataStore{
    model: any;

    load(options: any): boolean {
        this.model = new WorkOrderModel();
        this.model.id = options.id;
        this.model.code = options.code;
        this.model.description = options.description;

        return true;
    }

    create(): boolean {
        this.model = new WorkOrderModel();
        return true;
    }

    save(): boolean {
        return true;
    }

    delete(): boolean {
        return true;
    }

    canSave(): boolean {
        return true;
    }

    canDelete(): boolean {
        return true;
    }

    isValid(): boolean {
        return true;
    }

    approveWorkOrder(): boolean {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.Approved;
        return true;
    }

    cancelWorkOrder(): boolean {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.Canceled;
        return true;
    }

    awaitApproval(): boolean {
        // perform some server method and return result that updates the model
        // in case we just skip the server call and move directly to the model
        this.model.status = WorkOrderStatus.AwaitingApproval;
        return true;
    }
}