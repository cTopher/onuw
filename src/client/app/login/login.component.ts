import {IComponentOptions} from 'angular'
import LoginController from './login.controller'

export const loginComponent: IComponentOptions = {
  template: require('./login.html'),
  controller: LoginController,
  controllerAs: 'vm',
}
