angular
    .module('app')
    .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', { url: '/main', component: 'main', redirectTo: 'main.home' })
        .state('main.home', { url: '/home', component: 'home' })
        .state('main.assess', { url: '/assess', component: 'assess', redirectTo: 'main.assess.entities' })
        .state('main.assess.entities', { url: '/entities', component: 'entities' })
        .state('main.assess.finances', { url: '/finances', component: 'finances' })
        .state('main.assess.commitments', { url: '/commitments', component: 'commitments' })
        .state('main.assess.review', { url: '/review', component: 'review' });

    $urlRouterProvider.otherwise('/main');
}