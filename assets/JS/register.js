const logUser = document.getElementById("log-usuario")
const password = document.getElementById("log-senha")
const confirmPassword = document.getElementById("log-confirmar-senha")
const btnRegister = document.getElementById("SignInBtn")

btnRegister.addEventListener("click", () =>  {

      const user = logUser.value
      const passwordLocate = password.value
      const passwordConfirm = confirmPassword.value

      if (passwordLocate == passwordConfirm && user.trim() != "") {
            alert("Registro concluído")
      }else{
            alert("Senha não confere ou campo usuário vazio")
      }
})