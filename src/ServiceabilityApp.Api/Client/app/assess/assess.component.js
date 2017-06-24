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

        ctrl.entities = [
            {
                firstName: 'Aaron',
                lastName: 'Shiels',
                dob: new Date(1989,03,28)
            },
            {
                firstName: 'William',
                lastName: 'Farrell',
                dob: new Date(1989, 11, 22)
            },
        ];
    }
}