angular
    .module('app')
    .component('main', mainComponent());

function mainComponent() {
    return {
        template: require('./main.component.html'),
        controller: mainController
    };

    function mainController() {
        var ctrl = this;
    }
}