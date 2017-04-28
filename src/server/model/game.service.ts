import Game from './game'
import {PlayerTo} from '../../common/game.to'
export class GameService {

  game: Game = new Game()

  addPlayer(name: string) {
    this.game.addPlayer(name)
  }

  getPlayer(name: string): PlayerTo {
    return this.game.getPlayer(name).json
  }
}

export const gameService = new GameService()
