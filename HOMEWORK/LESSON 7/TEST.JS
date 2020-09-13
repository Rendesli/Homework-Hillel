
  function getPasswordFromUser(success, fail) {//ok меняем на succes, потому что вызов параметра success, а не оk
    let password = prompt("Password?", '');
    if (password == "rockstar") success();
    else fail();
  }

  let user = {
    name: 'Andrew',
  
    loginSuccess() {
      alert(`${user.name} logged in`);// нужно вызывать сам обьект, а не ссылку на обьект, this отрабатывает только во внешних не вложенных функциях, и указывает на элемент DOM 
    },
  
    loginFail() {
      alert(`${user.name} failed to log in`);
    },
  
  };
  
  getPasswordFromUser(user.loginSuccess, user.loginFail);//передаем правильный метод 
