"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, PragmaBOActions, PragmaBusinessObject;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("PragmaBOActions", PragmaBOActions = {
                load: 0,
                create: 1,
                save: 2,
                delete: 3
            });

            _export("PragmaBOActions", PragmaBOActions);

            _export("PragmaBusinessObject", PragmaBusinessObject = function () {
                PragmaBusinessObject.prototype.initializeActions = function initializeActions() {
                    if (this.dataStore) {
                        this.actions.set(PragmaBOActions.load, this.dataStore.load.bind(this.dataStore));
                        this.actions.set(PragmaBOActions.create, this.dataStore.create.bind(this.dataStore));
                        this.actions.set(PragmaBOActions.save, this.dataStore.save.bind(this.dataStore));
                        this.actions.set(PragmaBOActions.delete, this.dataStore.delete.bind(this.dataStore));
                    }
                };

                PragmaBusinessObject.prototype.performAction = function performAction(action) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                    if (this.actions.has(action)) {
                        return this.actions.get(action)(options);
                    }

                    return null;
                };

                _createClass(PragmaBusinessObject, [{
                    key: "model",
                    get: function get() {
                        if (!this.dataStore) {
                            return null;
                        }

                        return this.dataStore.model;
                    }
                }]);

                function PragmaBusinessObject() {
                    var dataStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                    _classCallCheck(this, PragmaBusinessObject);

                    this.actions = new Map();
                    this.dataStore = dataStore;
                    this.initializeActions();
                }

                return PragmaBusinessObject;
            }());

            _export("PragmaBusinessObject", PragmaBusinessObject);
        }
    };
});
//# sourceMappingURL=pragma-business-object.js.map
