import { exchangesRender } from "./pages/exchangesRender.js"
import { newExchangesModal } from "./pages/newExchangesModal.js"
import { modalSearchOffer } from "./pages/modalSearchOffer.js"
import { modalSearchOfferCheck } from "./pages/modalSearchOfferCheck.js"

async function minhasOfertasInfo(_stone_id, troca_id, img_url, stone_name) {

    console.log("minhasOfertasInfo", _stone_id, troca_id, img_url, stone_name);
}

async function minhasOfertas() {
    console.log("Minhas Ofertas");

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/getoferta`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log(data.data);

        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            display.innerHTML += `
            <div class="inventory_icon">
                <button class="stone" onclick="minhasOfertasInfo('${element.stone_id}','${element.troca_id}','${element.stone_img_url}','${element.stone_name}')">
                    <img width="100%" height="100%" src="${element.stone_img_url}" />
                </button>  
                <button onclick="minhasOfertasInfo('${element.stone_id}','${element.troca_id}','${element.stone_img_url}','${element.stone_name}')">VER OFERTA</button>        
            </div>`;

        });

    } catch (error) {

        console.log(error);

    }

}

async function ProcurarOfertarConfirma(_id_stone_offer, _id_troca, _img_url, _name) {

    console.log("ProcurarOfertarConfirma", _id_stone_offer, _id_troca, _img_url, _name);
    console.log("oferta id", _id_stone_offer)
    console.log("troca id", _id_troca)

    const token = localStorage.getItem("auth");
    const newOffer = {
        id_pedra: _id_stone_offer,
        id_troca: _id_troca,
        stone_img_url: _img_url,
        stone_name: _name
    }

    console.log(newOffer);

    try {
        const response = await fetch(`http://localhost:8082/addoferta`, {
            method: "POST",
            body: JSON.stringify(newOffer),
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.getElementById(
            "status_troca_oferecer"
        ).textContent = `Oferta criada com sucesso!`;

        //pegar os dados da pedra retornados no data
        console.log("data", data);

    } catch (error) {
        document.getElementById("statusEdit").textContent = error;
    }


}

async function modalProcurarOfertar(_img_url, _name, _description, _id_troca, _id_stone_offer) {

    console.log("modalProcurarOfertar", _img_url, _name, _description, _id_troca, _id_stone_offer);
    let modal = document.getElementById("display_box");
    modal.innerHTML = ``;
    modal.innerHTML = modalSearchOfferCheck(_img_url, _name, _description, _id_troca, _id_stone_offer);
}


async function displayOferta(_id_troca) {

    console.log("modal Procurar", _id_troca);

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);


        console.log("displayOferta - dados do display de pedras", data)

        // document.getElementById("text_Troca").innerHTML = `<h3>Escolha uma pedra para ofertar</h3>`;
        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            if (element.validated === true && element.offered === false) {
                display.innerHTML += `
                <div class="inventory_icon">
                    <button class="stone" onclick="modalProcurarOfertar('${element.img_url}', '${element.name}', '${element.description}', '${_id_troca}', '${element.id}')">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>          
                </div>`;
            }

        });

    } catch (error) {

        console.log(error);

    }
}

async function modalProcurar(_id_troca, _id_pedra, _wish, _img_url) {

    console.log("modal Procurar", _id_troca, _id_pedra, _wish, _img_url)

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/getpedra/${_id_pedra}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log("data do getPedraModal", data);

        document.getElementById("display_box").innerHTML = modalSearchOffer(data.data[0], _id_troca, _wish);


    } catch (error) {

        console.log(error);

    }

}


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
                    <button class="stone" onclick="modalProcurar('${element.id}','${element.stone_id}','${element.wish}','${element.img_url}')">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>  
                    <button onclick="modalProcurar('${element.id}','${element.stone_id}','${element.wish}','${element.img_url}')">VER OFERTA</button>        
                </div>`;
            }

        });


    } catch (error) {

        console.log(error);

    }

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

async function minhasTrocas() {

    try {
        const token = localStorage.getItem("auth");

        const response = await fetch(`http://localhost:8082/minhasTrocas`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();

        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {
            display.innerHTML += `
            <div class="inventory_icon">
                <button class="stone">
                    <img width="100%" height="100%" src="${element.img_url}" />
                </button>  
                <button onclick="offers('${element.id}')">VER OFERTA</button>
                <button onclick="cancel()">CANCELAR TROCA</button>       
            </div>`;
        });

    }

    catch (error) {
        console.log(error);
    }
}

async function offers(id) {
    
    try {
        const token = localStorage.getItem("auth");

        const response = await fetch(`http://localhost:8082/minhasOfertas/${id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();

        const display = document.getElementById("display_box");
        display.innerHTML = ``;

        data.data.forEach(element => {
            console.log(element)
            display.innerHTML += `
            <div class="inventory_icon">
                <button class="stone stone_modal">
                    <img width="100%" height="100%" src="${element.img_url}" />
                </button>
 
                <p id="stone_name">${element.user_name} </p>
                <p id="stone_description" class="stone_description_modal">${element.email} </p>
                <p id="stone_description" class="stone_description_modal">${element.phone} </p>
                <p id="stone_name">${element.name} </p>
                <p id="stone_description" class="stone_description_modal">${element.description} </p>
                <button onclick="acept()">
                    ACEITAR TROCA
                </button>
                <button onclick="refuse()">
                    RECUSAR TROCA
                </button>
            </div>`;
        });

    }

    catch (error) {
        console.log(error);
    }
}

function acept(){
    console.log("aceitar");
}

function refuse(){
    console.log("recusar");
}

function cancel(){
    console.log("cancela troca");
}

window.minhasOfertasInfo = minhasOfertasInfo;
window.ProcurarOfertarConfirma = ProcurarOfertarConfirma;
window.modalProcurarOfertar = modalProcurarOfertar;
window.displayOferta = displayOferta;
window.modalProcurar = modalProcurar;
window.displayTroca = displayTroca;
window.novaTrocaModal = novaTrocaModal;
window.addTroca = addTroca;
window.minhasOfertas = minhasOfertas;
window.procurar = procurar;
window.exchanges = exchanges;
window.minhasTrocas = minhasTrocas;
window.offers = offers;
window.acept = acept;
window.refuse = refuse;
window.cancel = cancel;
export { exchanges }