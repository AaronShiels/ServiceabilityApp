angular
    .module('app')
    .component('entities', entitiesComponent());

function entitiesComponent() {
    return {
        template: require('./entities.component.html'),
        controller: entitiesController,
        bindings: {
            entities: '='
        }
    };

    function entitiesController() {
        var ctrl = this;

        ctrl.add = add;
        ctrl.remove = remove;

        function add() {
            ctrl.entities.push({});

            console.log('Entity added.');
        }

        function remove(entity) {
            var index = ctrl.entities.indexOf(entity);
            ctrl.entities.splice(index, 1);

            console.log('Entity ' + index + ' removed.');
        }
    }
}