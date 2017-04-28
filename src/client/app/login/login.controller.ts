import {StateService} from 'angular-ui-router'
import {IFormController} from 'angular'
import Api from '../api'

export interface LoginVm {
  username: string
  form: IFormController
  login()
}

export default class LoginController implements LoginVm {

  username: string
  form: IFormController

  /* @ngInject */
  constructor(private $state: StateService, private api: Api) {
  }

  login() {
    this.form.$setSubmitted()
    if (this.form.$valid) {
      this.api.login(this.username)
        .then(() => this.$state.go('app', {}, {reload: true}))
    }
  }

}
