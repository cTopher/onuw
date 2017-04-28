import Player from './player'
import {GameTo, Phase} from '../../common/game.to'
import {eventBus} from '../infrastructure/event-bus'
import {Role} from '../../common/role'

export default class Game {

  phase: Phase = 'setup'
  players: Player[] = []
  roles: Role[]

  addPlayer(name: string) {
    this.players.push(new Player(name))
    eventBus.emit('PlayerJoined', {name})
  }

  getPlayer(name: string): Player {
    // find hack
    return (this.players as any).find((player: Player) => player.name === name)
  }

  get json(): GameTo {
    return {
      phase: this.phase,
      roles: this.roles,
      players: this.players.map(player => ({name: player.name}))
    }
  }

}
