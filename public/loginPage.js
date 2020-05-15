'use strict'

let userForm = new UserForm();

let formHandler = (method, errorBox) => data => method(data, response => {
    if (response.success) {
        location.reload();
    } else {
        errorBox(response.data);
    }
});

userForm.loginFormCallback = formHandler(ApiConnector.login, userForm.setLoginErrorMessage.bind(userForm));
userForm.registerFormCallback = formHandler(ApiConnector.register, userForm.setRegisterErrorMessage.bind(userForm));