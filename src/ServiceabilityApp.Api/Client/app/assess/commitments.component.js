angular
    .module('app')
    .component('commitments', commitmentsComponent());

function commitmentsComponent() {
    return {
        template: require('./commitments.component.html'),
        controller: commitmentsController
    };

    function commitmentsController() {
        var ctrl = this;
    }
}