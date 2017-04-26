import {StateProvider} from 'angular-ui-router'

/* @ngInject */
export default function appRoute($stateProvider: StateProvider) {

  $stateProvider.state('app', {
    url: '',
    component: 'app',
    resolve: {},
    redirectTo: 'login',
  })

}
