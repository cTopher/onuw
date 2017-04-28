import {Role} from '../../common/role'
import {PlayerTo} from '../../common/game.to'

export default class Player {

  startingRole: Role
  currentRole: Role

  constructor(public readonly name: string) {
  }

  get json(): PlayerTo {
    return {
      name: this.name,
      startingRole: this.startingRole,
    }
  }

}
