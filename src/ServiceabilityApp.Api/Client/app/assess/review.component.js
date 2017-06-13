angular
    .module('app')
    .component('review', reviewComponent());

function reviewComponent() {
    return {
        template: require('./review.component.html'),
        controller: reviewController
    };

    function reviewController() {
        var ctrl = this;
    }
}