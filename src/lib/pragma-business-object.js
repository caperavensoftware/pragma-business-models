export const PragmaBOActions = {
    load: 0,
    create: 1,
    save: 2,
    delete: 3
};

export class PragmaBusinessObject {
    actions;
    dataStore;

    // Just a shorthand for binding purposes
    get model() {
        if (!this.dataStore) {
            return null;
        }

        return this.dataStore.model;
    }

    initializeActions() {
        if (this.dataStore) {
            this.actions.set(PragmaBOActions.load, this.dataStore.load.bind(this.dataStore));
            this.actions.set(PragmaBOActions.create, this.dataStore.create.bind(this.dataStore));
            this.actions.set(PragmaBOActions.save, this.dataStore.save.bind(this.dataStore));
            this.actions.set(PragmaBOActions.delete, this.dataStore.delete.bind(this.dataStore));
        }
    }

    performAction(action, options = null) {
        if (this.actions.has(action)) {
            return this.actions.get(action)(options);
        }

        return null;
    }

    constructor(dataStore = null) {
        this.actions = new Map();
        this.dataStore = dataStore;
        this.initializeActions();
    }
}