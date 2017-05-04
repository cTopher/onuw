import {IController} from 'angular'

export interface RoleCardVm {
  src: string
}

export default class RoleCardController implements RoleCardVm, IController {

  // bindings
  role: string

  src: string

  $onInit() {
    this.src = `/role/${this.role}.png`
  }


}
