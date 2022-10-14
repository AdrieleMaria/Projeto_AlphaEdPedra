import { modalEditUser } from "./pages/modalEditUser.js";
import { ProfileRender } from "./pages/ProfileRender.js";
import { modalDeleteProfile } from "./pages/modalDeleteProfile.js"

async function profile() {
    getUser();
}

async function getUser() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`https://alphaedpedra.ddns.net/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
 
        const render = await ProfileRender(data);
        document.getElementById("appHome").innerHTML = render;

        return true;

    } catch (error) {
        console.log(error);
    }
}

async function getProfileEdit(){
    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`https://alphaedpedra.ddns.net/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
        console.log(data)
        const render = await modalEditUser(data);
        document.getElementById("appHome").innerHTML += render;
        const modal = document.querySelector(`.modal`);
        modal.style.display = "block";

        document
            .getElementById("edit_user_submit")
            .addEventListener("click", function () {

                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const phone = document.getElementById("phone").value;

                if (name === "" || phone === "" || email === "") {
                    document.getElementById(
                        "done_warning"
                    ).textContent = `Preencha todos os campos`;
                } else {
                    console.log(name, email, phone);
                    putUser(name, email, phone, data.data.id);
                }
            });


    } catch (error) {
        console.log(error);
    }

  
}

async function putUser(_name, _email, _phone, _id) {

    const token = localStorage.getItem("auth");
    console.log(_name, _email, _phone, _id);

    const formData = new FormData();
    formData.append("name", _name);
    formData.append("email", _email);
    formData.append("phone", _phone);

    try {
        const response = await fetch(`https://alphaedpedra.ddns.net/updateUser/${_id}`, {
            method: "PUT",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById(
            "statusEdit"
        ).textContent = `Atualizado com sucesso!`;

        //pegar os dados da pedra retornados no data
        console.log("data", data);

    } catch (error) {
        document.getElementById("statusEdit").textContent = error;
    }

}

async function getProfileDelete() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`https://alphaedpedra.ddns.net/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
        console.log(data)
        const render = await modalDeleteProfile(data.data);
        document.getElementById("appHome").innerHTML += render;
        const modal = document.querySelector(`.modal`);
        modal.style.display = "block";

        document
            .getElementById("delete_profile")
            .addEventListener("click", function () {
                removeUser(data.data.id);
            });


    } catch (error) {
        console.log(error);
    }

}

async function removeUser(id){
    
    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`https://alphaedpedra.ddns.net/deleteUser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Basic ${token}`
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById(
            "statusDelete"
        ).textContent = `Deletado com sucesso!`;

        localStorage.clear();
        window.location.reload(false);

        console.log("data", data);

    } catch (error) {
        document.getElementById("statusDelete").textContent = error;
    }
}

window.profile = profile;
window.getProfileEdit = getProfileEdit;
window.getProfileDelete = getProfileDelete;

export { profile, getProfileEdit, getProfileDelete }