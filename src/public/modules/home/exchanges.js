import { exchangesRender } from "./pages/exchangesRender.js"
import { newExchangesModal } from "./pages/newExchangesModal.js"

async function procurar() {
    console.log("Procurar");

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/listofertas`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log(data);

        const userid = data.id_user;
        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            if (element.user_id !== userid) {
                display.innerHTML += `
                <div class="inventory_icon">
                    <button class="stone">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>  
                    <button>VER OFERTA</button>        
                </div>`;
            }

        });


    } catch (error) {

        console.log(error);

    }

}

function minhasOfertas() {
    console.log("Minhas Ofertas");
}

async function displayMinhasTrocas() {

    // const token = localStorage.getItem("auth");

    // try {
    //     const response = await fetch(`http://localhost:8082/listpedra`, {
    //         method: "GET",
    //         headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
    //     });

    //     const data = await response.json();

    //     if (!response.ok) throw new Error(data.err);

    //     const display = document.getElementById("display_box");
    //     display.innerHTML = ``;

    //     data.data.forEach(element => {

    //         if (element.validated === true && element.offered === true) {
    //             display.innerHTML += `
    //             <div class="inventory_icon">
    //                 <button class="stone" onclick="minhasTrocaModal('${element.id}','${element.name}','${element.description}','${element.img_url}')">
    //                     <img width="100%" height="100%" src="${element.img_url}" />
    //                 </button>          
    //             </div>`;
    //         }

    //     });


    // } catch (error) {

    //     console.log(error);

    // }

}

async function addTroca(_id, _img_url) {

    const token = localStorage.getItem("auth");

    const desejo = document.getElementById("desejo").value;

    const oferta = {
        id_pedra: _id,
        desejo: desejo,
        img_url: _img_url
    }

    console.log(oferta);

    try {
        const response = await fetch(`http://localhost:8082/addtroca`, {
            method: "POST",
            body: JSON.stringify(oferta),
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById(
            "statusCreateOferta"
        ).textContent = `Oferta criada com sucesso!`;

        //pegar os dados da pedra retornados no data
        console.log("data", data);

    } catch (error) {
        document.getElementById("statusEdit").textContent = error;
    }

}


function novaTrocaModal(_id, _name, _description, _img_url) {

    const display = document.getElementById("appHome");
    display.innerHTML = ``;
    display.innerHTML = newExchangesModal(_id, _name, _description, _img_url);


}

async function displayTroca() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            if (element.validated === true && element.offered === false) {
                display.innerHTML += `
                <div class="inventory_icon">
                    <button class="stone" onclick="novaTrocaModal('${element.id}','${element.name}','${element.description}','${element.img_url}')">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>          
                </div>`;
            }

        });


    } catch (error) {

        console.log(error);

    }

}

function exchanges(op) {

    console.log("TROCAS");
    document.getElementById("appHome").innerHTML = exchangesRender();

    switch (op) {
        case 1:
            displayTroca();
            break;
        case 2:
            displayMinhasTrocas();
            break;
        case 3:
            minhasOfertas();
            break;
        default:
            procurar();

    }

}


window.displayTroca = displayTroca;
window.novaTrocaModal = novaTrocaModal;
window.addTroca = addTroca;
window.minhasOfertas = minhasOfertas;
window.procurar = procurar;
export { exchanges };