import {StateProvider} from 'angular-ui-router'

/* @ngInject */
export default function loginRoute($stateProvider: StateProvider) {

  $stateProvider.state('login', {
    url: '',
    parent: 'app',
    component: 'login',
  })

}
