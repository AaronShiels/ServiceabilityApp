angular
    .module('app')
    .component('removeModal', addModalComponent());

function addModalComponent() {
    return {
        template: require('./remove-modal.component.html'),
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
        ctrl.remove = remove;
        ctrl.cancel = cancel;

        function onInit() {
            ctrl.text = ctrl.resolve.text;
        }

        function remove() {
            ctrl.close({ $value: null });
        };

        function cancel() {
            ctrl.dismiss({ $value: null });
        };
    }
}