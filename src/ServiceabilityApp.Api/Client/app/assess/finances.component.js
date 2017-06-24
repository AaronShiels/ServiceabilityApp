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

    function financesController() {
        this.$onInit = onInit;

        var ctrl = this;
        ctrl.currentEntity = {};
        ctrl.setIndex = setIndex;

        function setIndex(index) {
            ctrl.currentEntity = ctrl.entities[index];
        }

        function onInit() {
            ctrl.currentEntity = ctrl.entities[0];
        }
    }
}