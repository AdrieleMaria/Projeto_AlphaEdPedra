import { exchangesRender } from "./pages/exchangesRender.js"
import { newExchangesModal } from "./pages/newExchangesModal.js"
import { modalSearchOffer } from "./pages/modalSearchOffer.js"
import { modalSearchOfferCheck } from "./pages/modalSearchOfferCheck.js"
import { minhasOfertasModal } from "./pages/modalMyOffer.js"
import { closeModal } from "./searchProfile.js"

//MINHAS OFERTAS-------------------------------------------------
async function removeOferta(_id_troca, _id_stone) {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/deleteoferta/${_id_troca}/${_id_stone}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Basic ${token}`
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        document.querySelector(".status_delete_offer").innerHTML = `Cancelada com sucesso!`;

    } catch (error) {
        document.getElementsByClassName("status_delete_offer").textContent = error;
    }

}

async function minhasOfertasInfo(_stone_id, troca_id, img_url, stone_name, _id_offer) {

    // console.log("minhasOfertasInfo", _stone_id, troca_id, img_url, stone_name);

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/gettroca/${troca_id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);
        else {

            const trocador_id = data.data.user_id;
            const trocador_stone_id = data.data.stone_id;
            const trocador_stone_name = data.data.stone_name;
            const trocador_stone_url = data.data.img_url;
            const profileID = data.data.user_id;

            try {
                const response = await fetch(`http://localhost:8082/searchprofileID/${profileID}`, {
                    method: "GET",
                    headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
                });

                const dados = await response.json();

                if (!response.ok) throw new Error(dados.err);

                console.log("dados do usuario que abriu a troca >>>>", dados.data);

                const offer = {
                    user_stone_name: stone_name,
                    user_img_url: img_url,
                    user_stone_id: _stone_id,
                    offer_id: _id_offer,
                    troca_id: troca_id,
                    trocador_id: trocador_id,
                    trocador_stone_id: trocador_stone_id,
                    trocador_stone_name: trocador_stone_name,
                    trocador_name: dados.data.name,
                    trocador_phone: dados.data.phone,
                    trocador_email: dados.data.email,
                    trocador_stone_url: trocador_stone_url
                }

                console.log(offer);

                const display = document.getElementById("appHome");
                display.innerHTML += minhasOfertasModal(offer);
                const modal = document.querySelector(`.modal_trade`);
                modal.style.display = "block";

            } catch (error) {

                console.log(error);

            }

        }

    } catch (error) {

        console.log(error);

    }

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

        const display = document.getElementById("trade_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            display.innerHTML += `
            <div class="trade_icon">
                <button class="trade_stone" onclick="minhasOfertasInfo('${element.stone_id}','${element.troca_id}','${element.stone_img_url}','${element.stone_name}','${element.new_id}')">
                    <img width="100%" height="100%" src="${element.stone_img_url}" />
                </button>  
                <button class="trade_btn" onclick="minhasOfertasInfo('${element.stone_id}','${element.troca_id}','${element.stone_img_url}','${element.stone_name}','${element.new_id}')">VER OFERTA</button>        
            </div>`;

        });
        displayNull();

    } catch (error) {

        console.log(error);

    }

}
//---------------------------------------------------------------

//PROCURAR -------------------------------------------------------
async function ProcurarOfertarConfirma(_id_stone_offer, _id_troca, _img_url, _name) {

    const token = localStorage.getItem("auth");
    const newOffer = {
        id_pedra: _id_stone_offer,
        id_troca: _id_troca,
        stone_img_url: _img_url,
        stone_name: _name
    }

    console.log(newOffer);

    try {
        //const response = await fetch(`https://108.61.89.179:443/addoferta`, {
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
    let modal = document.getElementById("appHome");
    modal.innerHTML += modalSearchOfferCheck(_img_url, _name, _description, _id_troca, _id_stone_offer);
}

async function displayOferta(_id_troca) {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/listpedra`, {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        const display = document.getElementById("trade_box");
        display.innerHTML = ``;
        closeModal();

        document.querySelector("#text_Troca").innerHTML = `<p class="stone_name">Escolha uma pedra para ofertar:</p><br><br>`;

        data.data.forEach(element => {

            if (element.validated === true && element.offered === false) {
                display.innerHTML += `
                <div class="trade_icon">
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

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/getpedra/${_id_pedra}`, {
        const response = await fetch(`http://localhost:8082/getpedra/${_id_pedra}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log("data do getPedraModal", data);

        document.getElementById("appHome").innerHTML += modalSearchOffer(data.data[0], _id_troca, _wish);
        const modal = document.querySelector(`.modal_trade`);
        modal.style.display = "block";


    } catch (error) {

        console.log(error);

    }

}

async function procurar() {
    console.log("Procurar");

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/listofertas`, {
        const response = await fetch(`http://localhost:8082/listofertas`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log(data);

        const userid = data.id_user;
        const display = document.getElementById("trade_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            if (element.user_id !== userid) {
                display.innerHTML += `
                <div class="trade_icon">
                    <button class="trade_stone" onclick="modalProcurar('${element.id}','${element.stone_id}','${element.wish}','${element.img_url}')">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>  
                    <button class="trade_btn" onclick="modalProcurar('${element.id}','${element.stone_id}','${element.wish}','${element.img_url}')">VER OFERTA</button>        
                </div>`;
            }

        });
        displayNull();


    } catch (error) {

        console.log(error);

    }

}
//---------------------------------------------------------------


//NOVA TROCA -------------------------------------------------------

async function addTroca(_id, _img_url, _name) {

    const token = localStorage.getItem("auth");

    const desejo = document.getElementById("desejo").value;

    const oferta = {
        id_pedra: _id,
        desejo: desejo,
        img_url: _img_url,
        stone_name: _name
    }

    console.log(oferta);

    try {
        //     const response = await fetch(`https://108.61.89.179:443/addtroca`, {
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
    display.innerHTML += newExchangesModal(_id, _name, _description, _img_url);
    const modal = document.querySelector(`.modal_trade`);
    modal.style.display = "block";


}

async function displayTroca() {

    const token = localStorage.getItem("auth");

    try {
        //     const response = await fetch(`https://108.61.89.179:443/listpedra`, {
        const response = await fetch(`http://localhost:8082/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        const display = document.getElementById("trade_box");
        display.innerHTML = ``;

        data.data.forEach(element => {

            if (element.validated === true && element.offered === false) {
                display.innerHTML += `
                <div class="trade_icon">
                    <button class="stone" onclick="novaTrocaModal('${element.id}','${element.name}','${element.description}','${element.img_url}')">
                        <img width="100%" height="100%" src="${element.img_url}" />
                    </button>          
                </div>`;
            }

        });
        displayNull();


    } catch (error) {

        console.log(error);

    }

}

//---------------------------------------------------------------

function exchanges(op) {

    console.log("TROCAS");
    document.getElementById("appHome").innerHTML = exchangesRender();

    switch (op) {
        case 1:
            displayTroca();
            break;
        case 2:
            minhasTrocas();
            break;
        case 3:
            minhasOfertas();
            break;
        default:
            procurar();

    }

}

//MINHAS TROCAS-------------------------------------------------

async function minhasTrocas() {

    try {
        const token = localStorage.getItem("auth");

        const response = await fetch(`http://localhost:8082/minhasTrocas`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();

        const display = document.getElementById("trade_box");
        display.innerHTML = ``;

        data.data.forEach(element => {
            display.innerHTML += `
            <div class="trade_icon">
                <button class="trade_stone">
                    <img width="100%" height="100%" src="${element.img_url}" />
                </button>  
                <button id="verOferta" class="trade_btn" onclick="offers('${element.id}','${element.stone_id}')">VER OFERTA</button>   
            </div>`;
        });
        displayNull()

    }

    catch (error) {
        console.log(error);
    }
}

async function offers(idtroca, idStoneLog) {

    try {
        const token = localStorage.getItem("auth");


        const response = await fetch(`http://localhost:8082/minhasOfertas/${idtroca}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();

        const display = document.getElementById("appHome");

        console.log("offers fetch", data.data);

        if (data.data.length !== 0) {

            data.data.forEach(element => {
                console.log(element)
                display.innerHTML += `
                <div class="modal_trade">
                    <div id="profile_card" class="modal-content-stone">
    
                    <button id="closeCreate" class="display_flex" onclick="exchanges(2)">
                        <svg class="close_modal close_padding" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
                        </svg>
                    </button>
                    
                    <img class="modal_img" width="100%" height="100%" src="${element.img_url}" />
     
                    <p id="stone_description">${element.user_name} </p>
                    <p id="stone_description"">${element.email} </p>
                    <p id="stone_description">${element.phone} </p>
                    <p id="stone_description">${element.name} </p>
                    <p id="stone_description">${element.description} </p><br>
                    <p id="stone_description">Aperte em troca realizada após ter recebido a pedra. </p>
    
                    <button class="btn_submit" onclick="trocaIdStone('${idtroca}', '${element.id}', '${element.user_id}', '${idStoneLog}')">
                        TROCA REALIZADA
                    </button>
                    <button class="btn_submit" onclick="removeOferta('${idtroca}', '${element.id}')">
                        RECUSAR TROCA
                    </button>
                    <p id="statusCreateOferta"></p>
                </div>
                </div>`;
            });

            const modal = document.querySelector(`.modal_trade`);
            modal.style.display = "block";
        } else {

            display.innerHTML += `
                <div class="modal_trade">
                    <div id="profile_card" class="modal-content-stone">
                        <button id="closeCreate" class="display_flex" onclick="exchanges(2)">
                            <svg class="close_modal close_padding" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
                            </svg>
                        </button>
                        <p>Nenhuma oferta encontrada!</p>
                    </div>
                </div>`;

            const modal = document.querySelector(`.modal_trade`);
            modal.style.display = "block";
        }

    }
    catch (error) {
        console.log(error);
    }
}

async function trocaIdStone(_idtroca, _idPedraOffer, _idUser, _idStoneLog) {
    const token = localStorage.getItem("auth");

    try {

        const oferta = {
            idPedraO: _idPedraOffer,
            idUserO: _idUser,
            idPedraL: _idStoneLog
        }
        console.log("trocaIdStone", oferta)

        const response3 = await fetch(`http://localhost:8082/trocaPedra`, {
            method: "PUT",
            body: JSON.stringify(oferta),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Basic ${token}`
            },
        });

        console.log(response3);

        if (!response3.ok) throw new Error(data3.message);

        const data3 = await response3.json();

        acept(_idtroca, _idPedraOffer, _idUser, _idStoneLog)

        // console.log("data3", data3)
        // console.log("fimmm!")
        //mensagem

    } catch (error) {
        console.log(error)
        document.getElementsByClassName("status_delete_offer").textContent = error;
    }

}

async function acept(_idtroca, _idPedraOffer, _idUser, _idStoneLog) {
    console.log("aceitar", _idtroca, _idPedraOffer, _idUser, _idStoneLog);

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/deleteoferta/${_idtroca}/${_idPedraOffer}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Basic ${token}`
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.message);

        try {
            //deletar troca
            const response2 = await fetch(`http://localhost:8082/deletetroca/${_idtroca}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Basic ${token}`
                },
            });

            const data2 = await response2.json();

            if (!response2.ok) throw new Error(data2.message);

        } catch (error) {
            document.getElementsByClassName("status_delete_offer").textContent = error;
        }

    } catch (error) {
        document.getElementsByClassName("status_delete_offer").textContent = error;
    }

}

// async function refuse(_idOffer, _idPedra) {
//     console.log("recusar", _idOffer, _idPedra);
//     removeOferta(_id_Offer, _idPedra);
// }

// function cancel() {
//     console.log("cancela troca");
// }

//-------------------------------------------------------------


function displayNull() {
    const boxDisplay = document.querySelector("#trade_box");
    if (boxDisplay.innerHTML.length == 0) {
        boxDisplay.style.display = "none";
    } else {
        boxDisplay.style.display = "flex";
    }

};

window.displayNull = displayNull;
window.trocaIdStone = trocaIdStone;
window.removeOferta = removeOferta;
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
// window.refuse = refuse;
// window.cancel = cancel;
export { exchanges }