angular
    .module('app')
    .component('review', reviewComponent());

function reviewComponent() {
    return {
        template: require('./review.component.html'),
        controller: reviewController,
        bindings: {
            entities: '='
        }
    };

    function reviewController() {
        var ctrl = this;
    }
}