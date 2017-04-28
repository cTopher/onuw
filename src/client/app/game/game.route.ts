import {StateProvider} from 'angular-ui-router'
import GameService from './game.service'

/* @ngInject */
export default function gameRoute($stateProvider: StateProvider) {

  $stateProvider.state('game', {
    url: '',
    parent: 'app',
    component: 'game',
  })

}
