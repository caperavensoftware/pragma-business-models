export const WorkOrderStatus = {
    AwaitingApproval: "Awaiting Approval",
    Approved: "Approved",
    Canceled: "Canceled"
};

export class WorkOrderModel {
    id;
    code;
    description;
    status;

    constructor() {
        this.id = null;
        this.code = '';
        this.description = '';
        this.status = 'Awaiting Approval';
    }
}