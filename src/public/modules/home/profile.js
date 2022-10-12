import { modalEditUser } from "./pages/modalEditUser.js";
import { ProfileRender } from "./pages/ProfileRender.js";

async function profile() {
    getUser();
}

async function getUser() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/profile`, {
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
        const response = await fetch(`http://localhost:8082/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
        console.log(data)
        const render = await modalEditUser(data);
        document.getElementById("appHome").innerHTML = render;

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
        const response = await fetch(`http://localhost:8082/updateUser/${_id}`, {
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


window.profile = profile;
window.getProfileEdit = getProfileEdit;

export { profile, getProfileEdit }