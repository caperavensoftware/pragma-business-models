export class PragmaBusinessStore {
    model = null;

    load() {
        throw new Error("override load method");
    }

    create() {
        throw new Error("override create method");
    }

    save() {
        throw new Error("override save method");
    }

    delete() {
        throw new Error("override delete method");
    }
}