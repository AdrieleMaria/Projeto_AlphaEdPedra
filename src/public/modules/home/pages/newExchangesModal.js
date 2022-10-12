export function newExchangesModal(_id, _name, _description, _img_url) {
    return `    
    <div id="inventory_modal">
        <button id="closeCreate" onclick="exchanges(1)">
            <svg class="close_modal" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
            </svg>
        </button>

        <button class="stone">
            <img width="100%" height="100%" src="${_img_url}" />
        </button>
        <p id="stone_name">${_name}</p>
        <p id="stone_weight">${_description}</p>
        
        <input type="textarea" id="desejo" placeholder="Desejo trocar por..."/>

        <button type="submit" id="display_stone" name="display_stone" onclick="addTroca('${_id}', '${_img_url}')" class="btn_submit">Ofertar</button>

        <p id="statusCreateOferta"></p>

    </div>`
}
