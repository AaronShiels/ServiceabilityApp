angular
    .module('app')
    .component('finances', financesComponent());

function financesComponent() {
    return {
        template: require('./finances.component.html'),
        controller: financesController
    };

    function financesController() {
        var ctrl = this;
    }
}