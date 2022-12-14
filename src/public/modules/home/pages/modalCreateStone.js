export function modalCreateStone() {
    return ` 
    <div class="modal">
        <div id="profile_card" class="modal-content-stone">
            <div class="profile_title_modal display_flex">
                <h2 class="modal_title">Inventário</h2>

                <button id="closeCreate" class="close_modal" onclick=function() {modal.style.display = "none"};>
                    <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                    </svg>
                </button>
            </div>

            <input class="modal_input" type="text" id="stone_name_modal" name="stone_name" placeholder="Tipo de pedra"/>

            <input class="modal_input" type="text" id="stone_description" name="stone_weight" placeholder="Descrição..."/>

            <div class="file_div">
                <label for="stone_file" class="btn_file">BUSCAR IMAGEM</label>
                <input class="file_input" type="file" id="stone_file" name="stone_file" accept=".png, .jpg, .jpeg, image/* "placeholder="Escolha a imagem." title="Arquivos png, jpg, jpeg" />
                <p class="upload_warning"></p>
            </div>

            <button type="submit" id="cadastrate_stone" name="cadastrate_stone" class="btn_submit">CADASTRAR</button>
            <p class="done_warning"></p>

            <p id="statusCreate"></p>
        </div>
    </div> `
}