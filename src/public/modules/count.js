const appHome = document.getElementById("appHome");

const btnInventories = document.getElementById("inventories");
const btnDisplay = document.getElementById("display");
const btnTrocas = document.getElementById("trocas");

btnDisplay.addEventListener("click", printDisplay);
btnTrocas.addEventListener("click", trocas);
btnInventories.addEventListener("click", inventories);

function printDisplay() {

    // btnDisplay.classList.replace("btn_logonAC", "btn_logon");

    appHome.innerHTML = display();
    // document.getElementById("loginSubmit").addEventListener("click", acessLogin);
}
