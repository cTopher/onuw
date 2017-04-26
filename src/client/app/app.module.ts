import * as angular from 'angular'
import appRoute from './app.route'
import {appComponent} from './app.component'
import cardDirective from './card/card.directive'
import {LOGIN_MODULE} from './login/login.module'
import {GAME_MODULE} from './game/game.module'

console.log('ONE NIGHT ULTIMATE WEREWOLF')

angular.module('app', [LOGIN_MODULE, GAME_MODULE, 'ngAnimate', 'ngMaterial', 'ui.router'])
  .config(appRoute)
  .component('app', appComponent)
  .directive('card', cardDirective)
  .run(($trace) => $trace.enable('TRANSITION'))
