const userLog = document.getElementById("log-usuario");
const userPass = document.getElementById("log-senha");
const btnSign = document.getElementById("SignInBtn")

btnSign.addEventListener("click", () => {
    const user = userLog.value
    const password = userPass.value

    const localUser = localStorage.getItem("user")
    const localPassword = localStorage.getItem("password")

    if (user === localUser && password === localPassword) {
        setTimeout(() => {
            window.location.href = "../../pages/home.html"
            alert(`Seja bem vindo, ${user}`)
        }, 3000);
        
    }else{
        alert("Credenciais inválidas")
    }
})