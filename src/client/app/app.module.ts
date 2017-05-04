import * as angular from 'angular'
import appRoute from './app.route'
import {appComponent} from './app.component'
import cardDirective from './card/card.directive'
import {LOGIN_MODULE} from './login/login.module'
import {GAME_MODULE} from './game/game.module'
import Api from './api'
import {PICK_ROLES_MODULE} from './pick-roles/pick-roles.module'
import {roleCardComponent} from './role/role-card.component'

console.log('ONE NIGHT ULTIMATE WEREWOLF')

angular.module('app', [LOGIN_MODULE, GAME_MODULE, PICK_ROLES_MODULE, 'ngAnimate', 'ngMaterial', 'ui.router'])
  .config(appRoute)
  .component('app', appComponent)
  .component('roleCard', roleCardComponent)
  .directive('card', cardDirective)
  .service('api', Api)
// .run(($trace) => $trace.enable('TRANSITION'))
