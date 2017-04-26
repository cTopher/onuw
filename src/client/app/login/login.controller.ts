import {StateService} from 'angular-ui-router'
import {IFormController} from 'angular'

export interface LoginVm {
  form: IFormController
  login()
}

export default class LoginController implements LoginVm {

  form: IFormController

  /* @ngInject */
  constructor(private $state: StateService) {
  }

  login() {
    this.form.$setSubmitted()
    if (this.form.$valid) {
      this.$state.go('game')
    }
  }

}
