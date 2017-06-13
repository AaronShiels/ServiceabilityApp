angular
    .module('app')
    .component('entities', entitiesComponent());

function entitiesComponent() {
    return {
        template: require('./entities.component.html'),
        controller: entitiesController
    };

    function entitiesController() {
        var ctrl = this;
    }
}