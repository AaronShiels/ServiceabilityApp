angular
    .module('app')
    .component('assess', assessComponent());

function assessComponent() {
    return {
        template: require('./assess.component.html'),
        controller: assessController
    };

    function assessController() {
        var ctrl = this;
    }
}