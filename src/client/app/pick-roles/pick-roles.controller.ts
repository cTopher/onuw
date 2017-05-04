import {GameTo, PlayerTo} from '../../../common/game.to'
import {Role, ROLES} from '../../../common/role'

export interface PickRolesVm {
  // bindings
  players: PlayerTo[]

  cards: Card[]
  selectedRoles: Role[]
  toggle(card: Card)
}

interface Card {
  role: Role
  selected: boolean
}

export default class PickRolesController implements PickRolesVm {

  // bindings
  players: PlayerTo[]

  cards = ROLES.map((role) => ({role, selected: false}))
  selectedRoles: Role[] = []

  toggle(card: Card) {
    card.selected = !card.selected
    this.selectedRoles = this.cards.filter((card) => card.selected).map((card) => card.role)
  }

}
