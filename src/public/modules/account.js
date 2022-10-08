//---------------HOME
const appHome = document.getElementById("appHome");
const btnInventories = document.getElementById("inventories");
const btnDisplay = document.getElementById("display");
const btnTrocas = document.getElementById("trocas");
const btnPerfil = document.getElementById("btn_perfil");
const btnLogout = document.getElementById("btn_logout");

btnDisplay.addEventListener("click", printDisplay);
// btnTrocas.addEventListener("click", trocas);
// btnInventories.addEventListener("click", inventories);
btnLogout.addEventListener("click", logout)
//---------------HOME


function logout() {
    console.log("logout");
}


function printDisplay() {

    console.log("display");
    // btnDisplay.classList.replace("btn_logonAC", "btn_logon");

    // appHome.innerHTML = display();
    // document.getElementById("loginSubmit").addEventListener("click", acessLogin);
}


// function account() {



// }


// export { account }