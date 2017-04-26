import {IComponentOptions} from 'angular'
import GameController from './game.controller'

export const gameComponent: IComponentOptions = {
  template: require('./game.html'),
  controller: GameController,
  controllerAs: 'vm',
}
