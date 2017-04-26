import * as angular from 'angular'
import gameRoute from './game.route'
import {gameComponent} from './game.component'

export const GAME_MODULE = 'game'

angular.module(GAME_MODULE, ['ui.router'])
  .config(gameRoute)
  .component('game', gameComponent)
