import Api from '../api'
import {IPromise} from 'angular'
import {GameTo, PlayerTo} from '../../../common/game.to'

export default class GameService {

  private game: GameTo
  private player: PlayerTo

  /* @ngInject */
  constructor(private api: Api) {
  }

  fetchGame():IPromise<GameTo> {
    return this.api.getGame().then((game) => this.game = game)
  }

  fetchPlayer(): IPromise<PlayerTo>{
    return this.api.getPlayer().then((player) => this.player = player)
  }

}
