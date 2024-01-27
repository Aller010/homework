let attempts = 0;

function register() {
  alert("first register");
  const login = prompt("enter login:");
  const password = prompt("enter password:");
  alert("now you need to register");
  loginAndAuthorize(login, password);
}

function loginAndAuthorize(expectedLogin, expectedPassword) {
  let success = false;
  
  do {
    const enteredLogin = prompt("enter login:");
    const enteredPassword = prompt("enter password:");
    
    if (enteredLogin === expectedLogin && enteredPassword === expectedPassword) {
      alert("OK");
      success = true;
    } else {
      alert("incorrect login or password");
      attempts++;

      if (attempts >= 3) {
        const resetPassword = confirm("Вы превысили лимит попыток.Хотите сбросить пароль?");
        
        if (resetPassword) {
          resetUserPassword();
          attempts = 0;
        } else {
          const createNewUser = confirm("Хотите создать нового пользователя?");
          
          if (createNewUser) {
            register();
            attempts = 0;
            return;
          }
        }
      }
    }
  } while (!success);
}

function resetUserPassword() {
  const resetLogin = prompt("Введите логин для сброса пароля:");
  
  if (resetLoginExists) {
    alert("Пароль сброшен");
    attempts = 0;
  } else {
    const createUser = confirm("Такого логина не существует.Хотите создать нового пользователя?");
    
    if (createUser) {
      register();
      attempts = 0;
    }
  }
}
register();
