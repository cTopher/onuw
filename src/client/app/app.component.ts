import {IComponentOptions} from 'angular'
import './app.scss'

export const appComponent: IComponentOptions = {
  template: require('./app.html'),
  bindings: {players: '<'},
  controller: () => ({}),
  controllerAs: 'vm',
}
