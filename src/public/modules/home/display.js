// import { displayRender } from "./pages/inventoriesRender.js";

async function displayReq() {

    fetch(`http://localhost:8082/listpedra`, {
        method: "GET",
        // body: JSON.stringify(_user),
        //enviar o token para autorização
        headers: { "Content-type": "application/json; charset=UTF-8" },
    })
        .then((res) => res.json())
        .then((dados) => {
            console.log(dados);
            // if (dados === "Login sucedido") {
            //     body.innerHTML = homePage();
            // }
        })
        .catch((erro) => {
            console.log(erro);
            document.getElementById("status").innerHTML = `${erro}`;
        });

}

function display() {


    console.log("display");




}

























window.display = display;
export { display }