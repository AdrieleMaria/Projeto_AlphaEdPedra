export function modalDeleteStone(_dataStone) {
    return `
    <div class="modal">
        <div id="profile_card" class="modal-content-stone">
        
        <div class="stone_title_div display_flex">
            <h2 class="modal_title">Deletar: ${_dataStone.name}</h2>
            <button id="closeDelete" onclick="inventory()">
                <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                </svg>
            </button>
        </div>
        
        <img class="modal_img" width="100%" height="100%" src="${_dataStone.img_url}" />
        
        <p class="done_warning" class="stone_name">Deseja realmente deletar a pedra?</p>
        <p class="done_warning" class="stone_name">Nome: ${_dataStone.name}</p>
        <p class="done_warning" class="stone_weight">Descrição: ${_dataStone.description}</p>

        <button type="submit" id="delete_stone" name="delete_stone" class="btn_submit">DELETAR</button>
        <p class="done_warning" id="statusDelete"></p>
    </div>
    </div>
    `
}