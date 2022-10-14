export function modalStone(_data) {
    return `
    <div class="modal">
        <div id="profile_card" class="modal-content-stone">
        
            <button id="closeCreate" onclick="inventory()">
                <svg class="close_modal close_padding" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z" fill="black" />
                </svg>
            </button>

            
            <img class="modal_img" width="100%" height="100%" src="${_data.img_url}" />

            <p id="stone_name">${_data.name} </p>
            
            <p id="stone_description" class="stone_description_modal">Descrição: ${_data.description} </p>
        </div>
    </div>
    `
}
