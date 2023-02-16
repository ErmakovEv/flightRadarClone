import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Login extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.append(this.createForm());
  }

  private createForm() {
    const formLog = document.createElement('form');
    const inputName = document.createElement('input');
    inputName.classList.add('input');
    inputName.name = 'email';
    inputName.placeholder = 'name';
    const inputPass = document.createElement('input');
    inputPass.classList.add('input');
    inputPass.name = 'password';
    inputPass.placeholder = 'password';
    inputPass.type = 'password';
    const inputSubmit = document.createElement('input');
    inputSubmit.classList.add('input-btn', 'btn');
    inputSubmit.type = 'submit';
    formLog.append(inputName, inputPass, inputSubmit);
    formLog.onsubmit = async e => {
      e.preventDefault();
      const formData = new FormData(formLog);
      const email = formData.get('email');
      const password = formData.get('password');
      this.controller.loginHandler(email.toString(), password.toString());
    };
    return formLog;
  }
}
