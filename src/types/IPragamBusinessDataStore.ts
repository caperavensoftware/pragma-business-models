/*
    A datastore deals with the crud part of the equasion.
    Because the work deals around the model, the store also maintains the model property so that it does not have to be passed around.
*/
export interface IPragamBusinessDataStore {
    model: any;

    // load the model from the store given the particular options
    load(options: any): boolean;

    // create a new model
    create(): boolean;

    // save the current model to the store
    save(): boolean;

    // delete the model from the store
    delete(): boolean;

    // check if the model is in a condition where you can save
    canSave(): boolean;

    // check if the model is in a condition where it can be deleted
    canDelete(): boolean;

    // validate the model and check if the data is correct
    isValid(): boolean;
}