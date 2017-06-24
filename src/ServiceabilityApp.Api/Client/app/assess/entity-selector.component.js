angular
    .module('app')
    .component('entitySelector', entitySelectorComponent());

function entitySelectorComponent() {
    return {
        template: require('./entity-selector.component.html'),
        controller: entitySelectorController,
        bindings: {
            entities: '<',
            onSelect: '&'
        }
    };

    function entitySelectorController() {
        var ctrl = this;

        ctrl.index = 0;
        ctrl.select = select;

        function select(index) {
            ctrl.index = index;
            ctrl.onSelect({ index: index });
        }
    }
}