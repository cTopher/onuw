import {IHttpService, IPromise} from 'angular'
import {GameTo, PlayerTo} from '../../common/game.to'

export default class Api {

  /* @ngInject */
  constructor(private $http: IHttpService) {
  }

  login(username: string): IPromise<void> {
    return this.$http.post('/api/login', {username}).then(() => null)
  }

  getGame(): IPromise<GameTo> {
    return this.$http.get('/api/game').then((res) => res.data)
  }

  getPlayer(): IPromise<PlayerTo> {
    return this.$http.get('/api/player').then((res) => res.data)
  }

}
