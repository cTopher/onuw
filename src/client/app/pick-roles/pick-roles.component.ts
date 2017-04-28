import {IComponentOptions} from 'angular'
import PickRolesController from './pick-roles.controller'

export const pickRolesComponent: IComponentOptions = {
  template: require('./pick-roles.html'),
  controller: PickRolesController,
  controllerAs: 'vm',
  bindings: {players: '<'}
}
