import { modalLogout } from "./pages/modalLogout.js"
import { printLogin } from "../../index.js"

async function logoutUser(_id) {

    const token = localStorage.getItem("auth");

    localStorage.clear();
    window.location.reload(false);

}


function logout() {


    console.log("SAIR");

    document.getElementById("appHome").innerHTML += modalLogout();
    console.log("logout")

    document.querySelector(".modal_trade").style.display = 'block';

    document.getElementById("logout_stone_submit").addEventListener("click", logoutUser);

}

function closeLogout() {

    const del = document.querySelector('.modal_trade');
    const elem = document.querySelector('#appHome');
    elem.removeChild(del); 

}

window.closeLogout = closeLogout;
window.logout = logout;
export { logout, closeLogout }