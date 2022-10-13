import { inventoriesRender } from "./pages/inventoriesRender.js";
import { modalCreateStone } from "./pages/modalCreateStone.js";
import { modalStone } from "./pages/modalStone.js"
import { modalEditStone } from "./pages/modalEditStone.js";
import { modalDeleteStone } from "./pages/modalDeleteStone.js";

//Criação
async function postStone(_photo, _name, _description) {

    const token = localStorage.getItem("auth");
    const formData = new FormData();
    formData.append("photo", _photo);
    formData.append("name", _name);
    formData.append("description", _description);

    try {
        //const response = await fetch(`https://108.61.89.179:443/addpedra`, {
        const response = await fetch(`http://localhost:8082/addpedra`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById(
            "statusCreate"
        ).innerHTML = `Pedra cadastrada com sucesso!`;


        //pegar os dados da pedra retornados no data
        console.log("data", data);

    } catch (error) {
        document.getElementById("statusCreate").innerHTML = error;
    }

}

let photo;

function createStone() {

    document.getElementById("appHome").innerHTML += modalCreateStone();
    const modal = document.querySelector(`.modal`);
    modal.style.display = "block";

    //talvez não seja a melhor alternativa, já que terá que recarrregar a página inventory toda vez
    document.getElementById("closeCreate").addEventListener("click", inventory);

    document.getElementById("stone_file").addEventListener("change", (event) => {
        photo = event.target.files[0];
    });

    document
        .getElementById("cadastrate_stone")
        .addEventListener("click", function () {
            const name = document.getElementById("stone_name_modal").value;
            const description = document.getElementById("stone_description").value;

            if (name === "" || description === "" || photo === "") {
                document.getElementById(
                    "statusCreate"
                ).innerHTML = `Preencha todos os campos`;
            } else {
                postStone(photo, name, description);
            }
        });

}

async function getStoneModal(_id, _func) {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/getpedra/${_id}`, {
        const response = await fetch(`http://localhost:8082/getpedra/${_id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log("data do getStoneModal", data.data);
        document.getElementById("appHome").innerHTML += _func(data.data[0]);
        const modal = document.querySelector(`.modal`);
        modal.style.display = "block";

        return true;

    } catch (error) {

        console.log(error);

    }
}

function modalpedra(_id) {

    console.log("modalpedra", _id,);
    getStoneModal(_id, modalStone);

}

// Edição
async function putStone(_photo, _name, _description, _id) {

    // fetch(`http://localhost:8082/updatePedra/:id`

    const token = localStorage.getItem("auth");
    console.log(_photo, _name, _description, _id);

    const formData = new FormData();
    formData.append("photo", _photo);
    formData.append("name", _name);
    formData.append("description", _description);


    try {
        //const response = await fetch(`https://108.61.89.179:443/updatePedra/${_id}`, {
        const response = await fetch(`http://localhost:8082/updatePedra/${_id}`, {
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

async function editStone(_id) {
    console.log("edit", _id);
    try {

        const render = await getStoneModal(_id, modalEditStone);
        console.log(render)
        if (!render) throw new Error("errooooooo, passe mais tarde");

        document.getElementById("stone_file").addEventListener("change", (event) => {
            photo = event.target.files[0];
        });

        document
            .getElementById("edit_stone_submit")
            .addEventListener("click", function () {

                const name = document.getElementById("stone_name_modal").value;
                const description = document.getElementById("stone_description").value;

                if (name === "" || description === "") {
                    document.getElementById(
                        "done_warning"
                    ).textContent = `Preencha todos os campos`;
                } else {
                    console.log(photo, name, description, _id);
                    putStone(photo, name, description, _id);
                }
            });

    } catch (erro) {
        console.log(erro);
    }


}

// DELEÇÃO
async function deleteStone(_id) {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/deletepedra/${_id}`, {
        const response = await fetch(`http://localhost:8082/deletepedra/${_id}`, {
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

        //pegar os dados da pedra retornados no data
        console.log("data", data);

    } catch (error) {
        document.getElementById("statusDelete").textContent = error;
    }

}

async function removeStone(_id) {

    console.log("remove", _id);
    try {

        const render = await getStoneModal(_id, modalDeleteStone);
        console.log(render)
        if (!render) throw new Error("errooooooo, passe mais tarde");

        document
            .getElementById("delete_stone")
            .addEventListener("click", function () {

                deleteStone(_id);

            });

    } catch (erro) {
        console.log(erro);
    }

}


// Listar
async function getStone() {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/listpedra`, {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log(data);
        //retornando o objeto >>>>>>>> OK!!!!!
        const inventories = document.getElementById("inventory_main");
        inventories.innerHTML = ``;

        data.data.forEach(element => {
            console.log(element)
            // listIcon
            if (element.offered == false){
            inventories.innerHTML += `
            <div class="inventory_icon">
                <button class="stone" onclick="modalpedra(${element.id})">
                    <img width="100%" height="100%" src="${element.img_url}"/>
                </button>
                
                <p class="stone_name">${element.name}</p>
            
                <div class="edit_delete">

                    <button class="btnLimpo" onclick="editStone(${element.id})">
                        <svg width="20" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.651367 22.2038H24.5094V24.0002H0.651367V22.2038ZM20.5898 6.93402C21.2715 6.21545 21.2715 5.13758 20.5898 4.41901L17.5224 1.18542C16.8407 0.46684 15.8182 0.46684 15.1366 1.18542L2.35551 14.6587V20.4073H7.80876L20.5898 6.93402ZM16.3295 2.44292L19.3969 5.67651L16.8407 8.37117L13.7733 5.13758L16.3295 2.44292ZM4.05965 18.6109V15.3773L12.5804 6.39509L15.6478 9.62868L7.12711 18.6109H4.05965Z"
                                fill="black" />
                        </svg>
                    </button>
                    
                    <button class="btnLimpo" onclick="removeStone(${element.id})">
                        <svg width="20" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.36726 2.74832H7.11874C7.25542 2.74832 7.36726 2.64323 7.36726 2.51478V2.74832H16.811V2.51478C16.811 2.64323 16.9229 2.74832 17.0596 2.74832H16.811V4.85015H19.0477V2.51478C19.0477 1.4843 18.1562 0.646484 17.0596 0.646484H7.11874C6.02214 0.646484 5.13057 1.4843 5.13057 2.51478V4.85015H7.36726V2.74832ZM23.0241 4.85015H1.15424C0.604387 4.85015 0.160156 5.2676 0.160156 5.7843V6.71845C0.160156 6.8469 0.271991 6.95199 0.408677 6.95199H2.28501L3.05232 22.2195C3.10202 23.2149 3.97806 24.0002 5.03738 24.0002H19.1409C20.2034 24.0002 21.0763 23.2178 21.126 22.2195L21.8933 6.95199H23.7696C23.9063 6.95199 24.0181 6.8469 24.0181 6.71845V5.7843C24.0181 5.2676 23.5739 4.85015 23.0241 4.85015ZM18.9017 21.8984H5.27658L4.5248 6.95199H19.6535L18.9017 21.8984Z"
                                fill="black" />
                        </svg>
                    </button>

                </div>
            
            </div>`;
            }

        });

    } catch (error) {

        console.log(error);

    }

}

function listStone() {

    getStone();

}

function inventory() {
    document.getElementById("appHome").innerHTML = ``;

    document.getElementById("appHome").innerHTML = inventoriesRender();

    listStone();
    console.log("INVENTÁRIO");

    document.getElementById("new_stone").addEventListener("click", createStone);

}


window.modalpedra = modalpedra;
window.editStone = editStone;
window.removeStone = removeStone;
window.inventory = inventory;
export { inventory, removeStone, modalpedra, editStone }

