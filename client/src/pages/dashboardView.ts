import AbstractView from './abstractView';
import Controller from '../controller/controller';

export default class Dashboard extends AbstractView {
  // constructor(id: string, controller: Controller) {
  //   super(id, controller);

  //   const token = { token: '' };

  //   const formReg = document.createElement('form');
  //   const inputNameReg = document.createElement('input');
  //   inputNameReg.name = 'username';
  //   const inputPassReg = document.createElement('input');
  //   inputPassReg.name = 'pass';
  //   const inputRoleReg = document.createElement('input');
  //   inputRoleReg.name = 'role';
  //   const inputSubmitReg = document.createElement('input');
  //   inputSubmitReg.type = 'submit';
  //   formReg.append(inputNameReg, inputPassReg, inputRoleReg, inputSubmitReg);
  //   formReg.onsubmit = async e => {
  //     e.preventDefault();
  //     const formData = new FormData(formReg);
  //     const response = await fetch('http://127.0.0.1:3000/auth/reg', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     return false;
  //   };

  //   const formLog = document.createElement('form');
  //   const inputName = document.createElement('input');
  //   inputName.name = 'username';
  //   const inputPass = document.createElement('input');
  //   inputPass.name = 'pass';
  //   const inputSubmit = document.createElement('input');
  //   inputSubmit.type = 'submit';
  //   formLog.append(inputName, inputPass, inputSubmit);
  //   formLog.onsubmit = async e => {
  //     e.preventDefault();
  //     const formData = new FormData(formLog);
  //     const response = await fetch('http://127.0.0.1:3000/auth/log', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     const json = await response.json();
  //     token['token'] = json['token'];
  //     console.log(token['token']);
  //   };

  //   const btn = document.createElement('button');
  //   btn.textContent = 'Get users';
  //   btn.onclick = async () => {
  //     console.log(token['token']);
  //     const response = await fetch('http://127.0.0.1:3000/auth/users', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token['token']}`,
  //       },
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   };

  //   this.container.append(formReg, formLog, btn);
  // }
  constructor(id: string, controller: Controller) {
    super(id, controller);
    this.container.textContent = '<h1>Welcome to Dashboard!</h1>';
  }
}
