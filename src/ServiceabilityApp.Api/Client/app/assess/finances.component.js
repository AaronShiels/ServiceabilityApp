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
        var ctrl = this;
    }
}