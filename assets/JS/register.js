const logUser = document.getElementById("log-usuario")
const passwordUser = document.getElementById("log-senha")
const confirmPassword = document.getElementById("log-confirmar-senha")
const btnRegister = document.getElementById("SignInBtn")

btnRegister.addEventListener("click", () =>  {

      const user = logUser.value
      const password = passwordUser.value
      const passwordConfirm = confirmPassword.value
      
      
      
      if (password === passwordConfirm && user != "") {
            localStorage.setItem("user", user);
            localStorage.setItem("password", password);
            alert(`Cadastro concluído`)
      }
      else{
            alert("Confira os campos de usúario e senha")
      }
})