import * as angular from 'angular'
import {loginComponent} from './login.component'
import loginRoute from './login.route'

export const LOGIN_MODULE = 'login'

angular.module(LOGIN_MODULE, ['ui.router'])
  .config(loginRoute)
  .component('login', loginComponent)
