import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class AdminPanel extends AbstractView {
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.append(this.createForm());
  }

  private createForm() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    const h2 = document.createElement('h4');
    h2.classList.add('form-title');
    h2.textContent = 'Форма добавления пользователя';
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
    const inputRole = document.createElement('input');
    inputRole.classList.add('input');
    inputRole.name = 'role';
    inputRole.placeholder = 'role';
    inputRole.type = 'text';
    const inputSubmit = document.createElement('input');
    inputSubmit.classList.add('input-btn', 'btn');
    inputSubmit.type = 'submit';
    formLog.append(inputName, inputPass, inputRole, inputSubmit);
    formLog.onsubmit = async e => {
      e.preventDefault();
      const formData = new FormData(formLog);
      const email = formData.get('email');
      const password = formData.get('password');
      const role = formData.get('role');
      this.controller.registationHandler(
        email.toString(),
        password.toString(),
        role.toString(),
      );
    };
    formContainer.append(h2, formLog);
    return formContainer;
  }
}
