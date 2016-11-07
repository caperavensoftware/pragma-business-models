import {expect} from 'chai';
import 'aurelia-polyfills';
import {PragmaBusinessObject} from '../src/lib/pragma-business-object';

describe('PragmaBusinessObject Tests', function() {
    var pragmaBusinessObject;

    beforeEach(function() {
        pragmaBusinessObject = new PragmaBusinessObject ();
    });
    
    it('constructor', function() {
        expect(pragmaBusinessObject).to.not.be.null;
    });
});