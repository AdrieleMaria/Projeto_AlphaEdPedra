export function minhasOfertasModal(_data) {
    console.log(_data)
    return `
    <div class="modal_trade">
        <div id="profile_card" class="modal-content-stone">

        <button id="closeCreate" class="display_flex" onclick="exchanges(3)">
            <svg class="close_modal close_padding" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
            </svg>
        </button>

        <div class="myoffer_flex">
            <img class="myoffer_img" width="100%" height="100%" src="${_data.user_img_url}" />

            <div>
                <p id="stone_description">Minha oferta:</p>
                <p id="stone_description">${_data.user_stone_name}</p>
                <button style="margin-top: 1em;" class="trade_btn"  onclick="removeOferta('${_data.troca_id}', '${_data.user_stone_id}')">CANCELAR OFERTA</button> 
                <p class="status_delete_offer"></p>

            </div>       
        </div>

        <div class="myoffer_flex">
            <img class="myoffer_img" width="100%" height="100%" src="${_data.trocador_stone_url}" />

            <div>
                <p id="stone_description">Trocar por: ${_data.trocador_stone_name}</p>
                <p id="stone_description">Entre em contato com: ${_data.trocador_name}</p>
                <p id="stone_description">Telefone: ${_data.trocador_phone}</p>
                <p id="stone_description">Email: ${_data.trocador_email}</p>
            </div>  
        </div>

        </div>
    </div>
    `
}

/* <button class="stone stone_modal">
<img width="100%" height="100%" src="${_data.img_url}" />
</button>

<p id="stone_name">${_data.name} </p>

<p id="stone_description" class="stone_description_modal">${_data.description} </p>

<p class="stone_description_modal">${_wish} </p>

<button onclick="displayOferta(${_id_troca})">OFERECER TROCA</button> */