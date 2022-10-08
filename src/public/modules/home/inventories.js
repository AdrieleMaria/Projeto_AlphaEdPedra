import { inventoriesRender } from "./pages/inventoriesRender.js";
import { modalCreateStone } from "./pages/modalCreateStone.js";

async function postStone(_formData) {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/addpedra`, {
            method: "POST",
            body: _formData,
            headers: { 'Content-Type': 'multipart/form-data', "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById("statusCreate").innerHTML = `Pedra cadastrada com sucesso!`;


    } catch (error) {

        document.getElementById("statusCreate").innerHTML = error;
    }

}

function createStone() {

    document.getElementById("appHome").innerHTML = modalCreateStone();
    document.getElementById("closeCreate").addEventListener("click", inventory);

    document.getElementById("cadastrate_stone").addEventListener("click", function () {

        const name = document.getElementById("stone_name").value;
        const description = document.getElementById("stone_description").value;
        const photo = document.getElementById("stone_file").value;

        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', name);
        formData.append('description', description);

        console.log(formData);

        if (name === '' || description === "" || photo === "") {

            document.getElementById("statusCreate").innerHTML = `Preencha todos os campos`;

        } else {

            postStone(formData);

        }
    });

}


function inventory() {


    console.log("INVENTÁRIO");

    document.getElementById("appHome").innerHTML = inventoriesRender();

    //add pedra
    document.getElementById("new_stone").addEventListener("click", createStone);

}

window.inventory = inventory;
export { inventory }