angular
    .module('app')
    .component('addModal', addModalComponent());

function addModalComponent() {
    return {
        template: require('./add-modal.component.html'),
        controller: addModalController,
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        }
    };

    function addModalController() {
        this.$onInit = onInit;
        var ctrl = this;
        ctrl.value = null;
        ctrl.add = add;
        ctrl.cancel = cancel;

        function onInit() {
            ctrl.text = ctrl.resolve.text;
        }

        function add() {
            ctrl.close({ $value: ctrl.value });
        };

        function cancel() {
            ctrl.dismiss({ $value: null });
        };
    }
}