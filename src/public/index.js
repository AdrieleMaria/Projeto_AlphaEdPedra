import { login } from "./modules/access/login.js";
import { cadastro } from "./modules/access/cadastro.js";
import { acessCadastro } from "./modules/access/registration.js";
import { acessLogin } from "./modules/access/log.js";
import { display } from "./modules/home/display.js";
import { inventory } from "./modules/home/inventories.js";
import { exchanges } from "./modules/home/exchanges.js";
import { searchUser } from "./modules/home/searchUser.js";
import { profile } from "./modules/home/profile.js";
import { logout } from "./modules/home/logout.js";

//--------------INICIAL

const btnLogin = document.getElementById("login");
const btnCadastro = document.getElementById("cadastro");

btnLogin.addEventListener("click", printLogin);
btnCadastro.addEventListener("click", printCadastro);
//--------------INICIAL


function validToken() {
    const token = localStorage.getItem("auth");
    if (token) {
        console.log(token);
    }
}

validToken();



function printLogin() {

    const app = document.getElementById("app_form");
    btnCadastro.classList.replace("btn_logonAC", "btn_logon");
    btnLogin.classList.replace("btn_logon", "btn_logonAC");

    app.innerHTML = login();
    document.getElementById("loginSubmit").addEventListener("click", acessLogin);

}

function printCadastro() {

    const app = document.getElementById("app_form");
    btnLogin.classList.replace("btn_logonAC", "btn_logon");
    btnCadastro.classList.replace("btn_logon", "btn_logonAC");

    app.innerHTML = cadastro();
    document.getElementById("cadastroSubmit").addEventListener("click", acessCadastro);
}

export { printLogin }