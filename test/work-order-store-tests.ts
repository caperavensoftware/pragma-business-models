import {expect} from 'chai';
import 'aurelia-polyfills';
import {WorkOrderStore} from './../src/work-order-store';

describe('WorkOrderStore Tests', function() {
    var workOrderStore;

    beforeEach(function() {
        workOrderStore = new WorkOrderStore ();
    });
    
    it('constructor', function() {
        expect(workOrderStore).to.not.be.null;
    });

    it('load', function() {
        // Act
        const result = workOrderStore.load({id: 1000, code: "A", description: "A Description"});

        // Assert
        expect(result).to.be.true;
        expect(workOrderStore.model).to.not.be.null;
        expect(workOrderStore.model.id).to.be.equal(1000);
        expect(workOrderStore.model.code).to.be.equal("A");
        expect(workOrderStore.model.description).to.be.equal("A Description");
    });

    it('create', function() {
        // Act
        const result = workOrderStore.create();

        // Assert
        expect(result).to.be.true;
        expect(workOrderStore.model).to.not.be.null;
    });

    it('save', function() {
        // Act
        const result = workOrderStore.save();

        // Assert
        expect(result).to.be.true;
    });

    it('delete', function() {
        // Act
        const result = workOrderStore.delete();

        // Assert
        expect(result).to.be.true;
    });

    it('canSave', function() {
        // Act
        const result = workOrderStore.canSave();

        // Assert
        expect(result).to.be.true;
    });

    it('canDelete', function() {
        // Act
        const result = workOrderStore.canDelete();

        // Assert
        expect(result).to.be.true;
    });

    it('isValid', function() {
        // Act
        const result = workOrderStore.isValid();

        // Assert
        expect(result).to.be.true;
    });

});