import { login } from "./modules/login.js";
import { cadastro } from "./modules/cadastro.js";
import { homePage } from "./modules/home.js";
// import { account } from "./modules/account.js";

//--------------INICIAL
const app = document.getElementById("app_form");
const btnLogin = document.getElementById("login");
const btnCadastro = document.getElementById("cadastro");
const body = document.getElementById("body");
btnLogin.addEventListener("click", printLogin);
btnCadastro.addEventListener("click", printCadastro);
//--------------INICIAL


async function log(_user) {

    fetch(`http://localhost:8082/login`, {
        method: "POST",
        body: JSON.stringify(_user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => {
            if (res.status === 200 || res.status === 401) {
                const dados = res.json();
                return dados;
            }
        })
        .then((dados) => {
            console.log(dados);
            if (dados.message === "Login sucedido") {
                // window.location.href = "./home.html";
                // document.location.reload(true);
                body.innerHTML = homePage();
                // window.onload = account();

            } else if (dados.message === "Email não encontrado") {
                document.getElementById("status").innerHTML = `Conta inexistente`;
                document.getElementById("email").focus();
            } else if (dados.message === "Senha incorreta, acesso negado") {
                document.getElementById("status").innerHTML = `Senha incorreta`;
                document.getElementById("password").focus();
            } else {
                document.getElementById("status").innerHTML = `Erro inexperado...`;
            }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").textContent = `Erro inexperado...${erro}`
        });
}

async function register(_user) {

    fetch(`http://localhost:8082/register`, {
        method: "POST",
        body: JSON.stringify(_user),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => res.json())
        .then((dados) => {
            console.log(dados);
            if (dados.message === "Login sucedido") {
                // body.innerHTML = homePage();
            } else {
                if (dados.message === "Usuário existente") {
                    document.getElementById("status").innerHTML = `Conta já existente`;
                }
            }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").innerHTML = `${erro}`;
        });

}

async function acessLogin() {

    const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (user.email !== "" && user.password !== "") {

        const dataacess = await log(user);

        console.log("dataacess", dataacess);
        // if (!dataacess) {
        //     inventario(dataacess);
        // }

    } else {
        document.getElementById("status").innerHTML = `Preencha todos os campos`;
        document.getElementById("email").focus();
    }

}

async function acessCadastro() {

    const user = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (user.name !== "" && user.phone !== "" && user.email !== "" && user.password !== "") {

        const passwordValid = document.getElementById("password2").value;
        if (user.password !== passwordValid) {
            document.getElementById("password").value = "";
            document.getElementById("password2").value = "";
            document.getElementById("status").innerHTML = `Preencha com a mesma senha`;
            document.getElementById("password").focus();
        } else {

            const dataacess = await register(user);
            console.log("dataacess", dataacess);

        }

    } else {
        document.getElementById("status").innerHTML = `Preencha todos os campos`;
    }

}

function printLogin() {

    btnCadastro.classList.replace("btn_logonAC", "btn_logon");
    btnLogin.classList.replace("btn_logon", "btn_logonAC");

    app.innerHTML = login();
    document.getElementById("loginSubmit").addEventListener("click", acessLogin);

}

function printCadastro() {

    btnLogin.classList.replace("btn_logonAC", "btn_logon");
    btnCadastro.classList.replace("btn_logon", "btn_logonAC");

    app.innerHTML = cadastro();
    document.getElementById("cadastroSubmit").addEventListener("click", acessCadastro);
}
