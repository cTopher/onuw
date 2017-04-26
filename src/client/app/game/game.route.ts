import {StateProvider} from 'angular-ui-router'

/* @ngInject */
export default function gameRoute($stateProvider: StateProvider) {

  $stateProvider.state('game', {
    url: '',
    parent: 'app',
    component: 'game',
  })

}
