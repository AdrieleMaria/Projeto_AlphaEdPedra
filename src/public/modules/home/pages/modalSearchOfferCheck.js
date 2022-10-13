export function modalSearchOfferCheck(_img_url, _name, _description, _id_troca, _id_stone_offer) {
    return `
    <div class="modal_trade modal_available">
        <div id="profile_card" class="modal-content-stone">
        
            <button id="closeCreate" class="display_flex" onclick="exchanges(4)">
                <svg class="close_modal close_padding" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
                </svg>
            </button>

            <img class="modal_img" width="100%" height="100%" src="${_img_url}" />

            <p id="stone_name">${_name}</p>
            
            <p id="stone_description" class="stone_description_modal">${_description}</p>

            <button style="margin: 2em 0 1em;" class="trade_btn" onclick="ProcurarOfertarConfirma('${_id_stone_offer}', '${_id_troca}', '${_img_url}', '${_name}')">CONFIRMAR</button>

            <p id="status_troca_oferecer"></p>

        </div>
    </div>
    `
}