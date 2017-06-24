angular
    .module('app')
    .component('commitments', commitmentsComponent());

function commitmentsComponent() {
    return {
        template: require('./commitments.component.html'),
        controller: commitmentsController,
        bindings: {
            entities: '='
        }
    };

    function commitmentsController() {
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