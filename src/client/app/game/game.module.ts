import * as angular from 'angular'
import gameRoute from './game.route'
import {gameComponent} from './game.component'
import GameService from './game.service'

export const GAME_MODULE = 'game'

angular.module(GAME_MODULE, ['ui.router'])
  .config(gameRoute)
  .service('gameService', GameService)
  .component('game', gameComponent)
