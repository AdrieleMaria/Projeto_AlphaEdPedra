import { inventoriesRender } from "./pages/inventoriesRender.js";
import { modalCreateStone } from "./pages/modalCreateStone.js";
// import { modalEditStone } from "./pages/modalEditStone.js";
// import { modalDeleteStone } from "./pages/modalDeleteStone.js";

//Criação
async function postStone(_photo, _name, _description) {

    const token = localStorage.getItem("auth");
    const formData = new FormData();
    formData.append("photo", _photo);
    formData.append("name", _name);
    formData.append("description", _description);

    try {
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

    document.getElementById("appHome").innerHTML = modalCreateStone();

    //talvez não seja a melhor alternativa, já que terá que recarrregar a página inventory toda vez
    document.getElementById("closeCreate").addEventListener("click", inventory);

    document.getElementById("stone_file").addEventListener("change", (event) => {
        photo = event.target.files[0];
    });

    document
        .getElementById("cadastrate_stone")
        .addEventListener("click", function () {
            const name = document.getElementById("stone_name").value;
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

// Edição
async function putStone() {

    // fetch(`http://localhost:8082/updatePedra/:id`

}

function editStone(_stone) {

    document.getElementById("appHome").innerHTML = modalEditStone(_stone);

    // edit_stone_submit

}

// Listar
async function getStone() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        console.log(data);

        //retornando o objeto >>>>>>>> OK!!!!!


    } catch (error) {

        console.log(error);

    }

}

function listStone() {

    getStone();


    //construir os cards
}

// DELEÇÃO
async function deleteStone(_id) {

    // fetch(`http://localhost:8082/deletepedra/:${_id}`

}

function removeStone(_id) {

    document.getElementById("appHome").innerHTML = modalDeleteStone();

    document.getElementById("delete_stone").addEventListener("click", function () {


        deleteStone(_id);


    });




}

function inventory() {

    listStone();
    console.log("INVENTÁRIO");

    document.getElementById("appHome").innerHTML = inventoriesRender();

    document.getElementById("new_stone").addEventListener("click", createStone);

}

window.inventory = inventory;
export { inventory }

