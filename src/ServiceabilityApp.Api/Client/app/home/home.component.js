angular
    .module('app')
    .component('home', homeComponent());

function homeComponent() {
    return {
        template: require('./home.component.html')
    };
}