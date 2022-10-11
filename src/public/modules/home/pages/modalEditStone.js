export function modalEditStone(_dataStone) {
    return `
    <aside id="cadastrate_modal">
        <div class="modal_title_div display_flex">
            <h2 class="modal_title">Editar: ${_dataStone.name}</h2>
            <button id="closeEdit" onclick="inventory()">
                <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                </svg>
            </button>
        </div>

        <input class="modal_input" type="text" id="stone_name" name="stone_name" placeholder="Nome" value="${_dataStone.name}"/>
        <input class="modal_input" type="text" id="stone_description" name="stone_weight" placeholder="Description..." value="${_dataStone.description}"/>

        <div class="file_div">
            <label for="stone_file" class="btn_file">BUSCAR IMAGEM</label>
            <input class="file_input" type="file" id="stone_file" name="stone_file" accept=".png, .jpg, .jpeg, image/*"
                placeholder="Escolha a imagem." title="Arquivos png, jpg, jpeg" />
            <p class="upload_warning"></p>
        </div>

        <button type="submit" id="edit_stone_submit" name="edit_stone" class="btn_submit">EDITAR</button>
        <p class="done_warning" id="statusEdit"></p>

    </aside>
    `
}