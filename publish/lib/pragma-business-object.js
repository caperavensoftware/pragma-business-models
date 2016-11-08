define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (PragmaBOActions) {
        PragmaBOActions[PragmaBOActions["load"] = 0] = "load";
        PragmaBOActions[PragmaBOActions["create"] = 1] = "create";
        PragmaBOActions[PragmaBOActions["save"] = 2] = "save";
        PragmaBOActions[PragmaBOActions["delete"] = 3] = "delete";
    })(exports.PragmaBOActions || (exports.PragmaBOActions = {}));
    var PragmaBOActions = exports.PragmaBOActions;
    ;
    var PragmaBusinessObject = (function () {
        function PragmaBusinessObject(dataStore) {
            if (dataStore === void 0) { dataStore = null; }
            this.actions = new Map();
            this.dataStore = dataStore;
            this.initializeActions();
        }
        Object.defineProperty(PragmaBusinessObject.prototype, "model", {
            get: function () {
                if (!this.dataStore) {
                    return null;
                }
                return this.dataStore.model;
            },
            enumerable: true,
            configurable: true
        });
        PragmaBusinessObject.prototype.initializeActions = function () {
            if (this.dataStore) {
                this.actions.set(PragmaBOActions.load, this.dataStore.load.bind(this.dataStore));
                this.actions.set(PragmaBOActions.create, this.dataStore.create.bind(this.dataStore));
                this.actions.set(PragmaBOActions.save, this.dataStore.save.bind(this.dataStore));
                this.actions.set(PragmaBOActions.delete, this.dataStore.delete.bind(this.dataStore));
            }
        };
        PragmaBusinessObject.prototype.performAction = function (action, options) {
            if (options === void 0) { options = null; }
            if (this.actions.has(action)) {
                return this.actions.get(action)(options);
            }
            return null;
        };
        return PragmaBusinessObject;
    }());
    exports.PragmaBusinessObject = PragmaBusinessObject;
});

//# sourceMappingURL=pragma-business-object.js.map
