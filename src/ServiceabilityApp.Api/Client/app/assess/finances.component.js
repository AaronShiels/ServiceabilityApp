angular
    .module('app')
    .component('finances', financesComponent());

function financesComponent() {
    return {
        template: require('./finances.component.html'),
        controller: financesController,
        bindings: {
            entities: '='
        }
    };

    function financesController($uibModal) {
        this.$onInit = onInit;

        var ctrl = this;
        ctrl.currentEntity = null;
        ctrl.financialYears = ['2015', '2016', getCurrentFinancialYear()]
        ctrl.selectEntity = selectEntity;
        ctrl.addEntry = addEntry;
        ctrl.removeEntry = removeEntry;
        ctrl.sumEntries = sumEntries;

        function onInit() {
            ctrl.entities
                .forEach(function (entity) {
                    if (!entity.finances) {
                        entity.finances = {
                            taxableIncome: {
                                'Pay As You Go': {}
                            },
                            taxDeductibles: {
                                'Rental Stuff': {}
                            },
                            taxFreeIncome: {
                                'Frankles': {}
                            }
                        };
                    }
                });

            ctrl.selectEntity(0);
        }

        function selectEntity(index) {
            ctrl.currentEntity = ctrl.entities[index];
        }

        function addEntry(collection, title) {
            var modal = $uibModal.open({
                component: 'addModal',
                resolve: {
                    text: function () { return title; }
                }
            });

            modal
                .result
                .then(function (entry) {
                    collection[entry] = {};
                    console.log('Entry ' + entry + ' added.');
                }, function (reason) { });
        }

        function removeEntry(collection, entry) {
            var modal = $uibModal.open({
                component: 'removeModal',
                resolve: {
                    text: function () { return entry; }
                }
            });

            modal
                .result
                .then(function () {
                    delete collection[entry];
                    console.log('Entry ' + entry + ' removed.');
                }, function (reason) { });
        }

        function sumEntries(collection, year) {
            return Object
                .keys(collection)
                .reduce(function (cumm, entryKey) {
                    return cumm + (collection[entryKey][year] || 0);
                }, 0);
        }

        function getCurrentFinancialYear() {
            var today = new Date();
            return today.getMonth() > 5 ? today.getFullYear() : today.getFullYear() - 1;
        }
    }
}