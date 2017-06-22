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
        var ctrl = this;
    }
}