import {IComponentOptions} from 'angular'
import './role-card.scss'
import RoleCardController from './role-card.controller'

export const roleCardComponent: IComponentOptions = {
  template: require('./role-card.html'),
  bindings: {role: '<'},
  controller: RoleCardController,
  controllerAs: 'vm',
}
