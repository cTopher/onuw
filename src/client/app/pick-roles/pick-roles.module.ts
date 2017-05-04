import * as angular from 'angular'
import {pickRolesComponent} from './pick-roles.component'
import pickRolesRoute from './pick-roles.route'

import './pick-roles.scss'

export const PICK_ROLES_MODULE = 'pickRoles'

angular.module(PICK_ROLES_MODULE, ['ui.router'])
  .config(pickRolesRoute)
  .component('pickRoles', pickRolesComponent)
