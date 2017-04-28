import {StateProvider} from 'angular-ui-router'

/* @ngInject */
export default function pickRolesRoute($stateProvider: StateProvider) {

  $stateProvider.state('pickRoles', {
    url: '',
    parent: 'app',
    component: 'pickRoles',
  })

}
