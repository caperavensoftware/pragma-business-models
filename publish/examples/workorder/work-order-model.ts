export const WorkOrderStatus = {
    AwaitingApproval: "Awaiting Approval",
    Approved: "Approved",
    Canceled: "Canceled"
};

export class WorkOrderModel {
    id: number;
    code: string;
    description: string;
    status: string;

    constructor() {
        this.id = null;
        this.code = '';
        this.description = '';
        this.status = 'Awaiting Approval';
    }
}