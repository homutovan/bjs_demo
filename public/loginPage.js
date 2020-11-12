'use strict'

let userForm = new UserForm();
let formHandler = (method, errorBox) => (data) => method(
    data, 
    (response) => response.success ? location.reload() : errorBox(response.data),
    );

userForm.loginFormCallback = formHandler(
    ApiConnector.login, 
    userForm.setLoginErrorMessage.bind(userForm)
    );

userForm.registerFormCallback = formHandler(
    ApiConnector.register, 
    userForm.setRegisterErrorMessage.bind(userForm)
    );

ApiConnector.login(
    { 
        login: 'John@Lennon.ru', 
        password: 'forever',
    },
    location.reload(),
)