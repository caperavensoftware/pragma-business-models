import {expect} from 'chai';
import 'aurelia-polyfills';
import {PragmaBusinessObject} from './../src/lib/pragma-business-object.js';

describe('PragmaBusinessObject Tests', function() {
    var pragmaBusinessObject;

    beforeEach(function() {
        pragmaBusinessObject = new PragmaBusinessObject ();
    });
    
    it('constructor', function() {
        expect(pragmaBusinessObject).to.not.be.null;
    });

    it('not constructor', function() {
        expect(() => PragmaBusinessObject()).to.throw("Cannot call a class as a function");
    });
});