import {StateProvider, Transition} from 'angular-ui-router'
import GameService from './game/game.service'
import {GameTo} from '../../common/game.to'

/* @ngInject */
export default function appRoute($stateProvider: StateProvider) {

  $stateProvider.state('app', {
    url: '',
    component: 'app',
    resolve: {
      game: (gameService: GameService) => gameService.fetchGame(),
      players: (game: GameTo) => game.players,
      player: (gameService: GameService) => gameService.fetchPlayer(),
    },
    redirectTo: redirectTo,
  })

  function redirectTo(trans: Transition) {
    return trans.injector().getAsync('player').then((player: GameTo) => {
      if (player) {
        return trans.injector().getAsync('game').then((game: GameTo) => game.roles ? 'game' : 'pickRoles')
      } else {
        console.log('not a player yet, login')
        return 'login'
      }
    })
  }

}
