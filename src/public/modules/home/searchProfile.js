import { searchUserRender } from "./pages/searchUserRender.js";
import { searchUserModalRender } from "./pages/searchUserModalRender.js";

async function searchForUser() {
    const token = localStorage.getItem("auth");

    const searchFor = document.querySelector("#profile_search");

    if (searchFor.value == ""){
        searchFor.placeholder = "Preencha";
        searchFor.focus();
        return;
    }

    try {
        const response = await fetch(`http://localhost:8082/searchprofile/${searchFor.value}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);
        const main = document.getElementById("appHome");
        main.innerHTML = ``;
 
        const render = await searchUserRender(data);
        if (data.err!==null){
            main.innerHTML = `<div class="stone_name">Nenhum usuário encontrado.</div>`;
        } else {
            data.data.forEach(element => {
                main.innerHTML += searchUserRender(element.name, element.email, element.phone);
            });
        }

        return true;

    } catch (error) {
        console.log(error);
    }
}

function userProfile(clicked) {
    const token = localStorage.getItem("auth");

    const main = document.getElementById("appHome");
    const modalId = "modal_"+clicked.id;
    const modal = document.querySelector(`#${modalId}`);
    modal.style.display = "block";
};

function closeModal() {
    var modals = document.getElementsByClassName("modal");
    for (var i=0; i<modals.length; i++) {
        modals[i].style.display = "none";
    }
    var modals = document.getElementsByClassName("modal_trade");
    for (var i=0; i<modals.length; i++) {
        modals[i].style.display = "none";
    }
};

window.closeModal = closeModal;
window.searchForUser = searchForUser;
window.userProfile = userProfile;
export { searchForUser, userProfile, closeModal }